const { mongooseModels } = require('../../../models');

class UserResolver {
  constructor(mongooseModels) {
    const { User } = mongooseModels;
    this.User = User;
    this.getUsers = this.getUsers.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  async getUsers() {
    return await this.User.find({});
  }

  async getUser(prevNode, args) {
    const { _id } = args;
    return await this.User.findOne({ _id });
  }
}

const userResolver = new UserResolver(mongooseModels);


module.exports = { userResolver };