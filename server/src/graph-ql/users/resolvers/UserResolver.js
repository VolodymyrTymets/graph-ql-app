const { mongooseModels } = require('../../../models');

class UserResolver {
  constructor(mongooseModels) {
    const { User } = mongooseModels;
    this.User = User;
    this.getUsers = this.getUsers.bind(this);
    this.getUser = this.getUser.bind(this);
    this.getCurrentUser = this.getCurrentUser.bind(this);
  }

  async getUsers() {
    return await this.User.find({});
  }

  async getUser(prevNode, args) {
    const { _id } = args
    return await this.User.findOne({ _id });
  }
  async getCurrentUser(prevNode, arg, context) {
    const { user } = context;
    return await this.User.findOne({ _id: user._id });
  }
}

const userResolver = new UserResolver(mongooseModels);


module.exports = { userResolver };