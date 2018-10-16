const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const graphqlHTTP = require('express-graphql');

require('dotenv').config();

const bodyParser = require('body-parser');
const { config } = require('./config');
const { mongoManager } = require('./src/mongo');
const { mongooseModels } = require('./src/models');
const { Authentication } = require('./src/utils/Authentication');
const { onAppStart } = require('./on-start');
const { schema } = require('./src/graph-ql/schema');

const app = express();
mongoManager.connect();
const authentication = new Authentication(mongooseModels.User, config.passport)


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// middleware
app.use(bodyParser.json({
  limit: config.bodyLimit,
}));

// Authorization
app.use(authentication.authenticationMiddleware);

app.use('/graphql', graphqlHTTP(req => ({
  schema,
  graphiql: true,
  context: {
    mongooseModels,
    config,
    user: req.user,
    auth: authentication,
  },
})));

// on App start
onAppStart();


module.exports = app;
