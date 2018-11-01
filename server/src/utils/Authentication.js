const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Unauthorized } = require('rest-api-errors');

/**
 * Provide Authentication functionality
 * @example
 *        const authentication = new Authentication({
 *           secretAuthToken: config.secretAuthToken, // secret token is saving only on server
             tokenTime: '30d', // time of validity of token
             usernameField: 'email' // field to save username can be email, username, email.address (should be unique)
 *        })
 *
 * **/

class Authentication {
  constructor(User, config = {
    secretAuthToken: '*********************',
    tokenTime: '1d',
    usernameField: 'username'
  }) {
    this._User = User;
    this._config = config;

    this.signIn = this.signIn.bind(this);
    this.signUp = this.signUp.bind(this);
    this.generateAccessToken = this.generateAccessToken.bind(this);
    this.authenticationMiddleware = this.authenticationMiddleware.bind(this);
  }

  _log(e, methodName = '') {
    /* eslint-disable */
    console.log(`ERR: [Authentication.${methodName}] ->`, e.message);
    console.log(e);
    /* eslint-disable */
  }
  _getPublicError() {
    return new Unauthorized(401, 'Unauthorized.');
  }

  async signIn(username, password) {
    try {
      const user = await this._User.findOne({ [this._config.usernameField]: username }, { hash: 1 });
      if (!user) {
        throw this._getPublicError()
      }
      const valid = await bcrypt.compare(password, user.hash);
      if (!valid) {
        throw this._getPublicError()
      }
      const salt = await bcrypt.genSalt(12);
      const hash = await bcrypt.hash(password, salt);
      user.salt = salt;
      user.hash = hash;
      await user.save();
      return user;
    } catch (e) {
      this._log(e, 'signIn');
      throw this._getPublicError();
    }
  }
  async signUp(username, password) {
    try {
      const salt = await bcrypt.genSalt(12);
      const hash = await bcrypt.hash(password, salt);

      const user = await new this._User({
        [this._config.usernameField]: username, salt, hash
      }).save();

      return user;
    } catch (e) {
      this._log(e, 'signUp');
      throw this._getPublicError();
    }
  }
  generateAccessToken(data) {
    return jwt.sign(data, this._config.secretAuthToken, {
      expiresIn: this._config.tokenTime
    });
  }
  /**
   * Authenticate resolver used to check if user Authenticated in ql resolver
   *
   * @example
   *      const userSchema = {
            type: userType,
            args: {
              id: { type: graphql.GraphQLString }
            },

            // here extend of resolvers
            resolve: (_, args, context) => context.auth.authenticate(_, args, context,
              (_, args, context) => {
                 // if auth return data in not return 401
                 return { data };
              })
          };
   * **/
  authenticate(_, params, context, nexResolver) {
    if(context.user && context.user._id) {
      return nexResolver();
    }
    throw this._getPublicError();
  }
  /**
   * Authenticate middleware for express extend req with user object
   *
   * @example
   *      app.use(authentication.authenticationMiddleware);
   * **/
  async authenticationMiddleware(req, res, next) {
    req.headers.authorization = req.headers.authorization || `Bearer ${req.query.access_token}`;
    try {
      const user = await jwt.verify(req.headers.authorization, this._config.secretAuthToken);
      req.user = user;
      req.next();
    } catch (e) {
      next();
    }
  }
}

module.exports = { Authentication };