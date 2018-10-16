const graphql = require('graphql');

const { userType } = require('./types/user');
const { userMutations } = require('./mutations');
const { userResolver } = require('./resolvers');

const userSchema = {
  type: userType,
  // `args` describes the arguments that the `user` query accepts
  args: {
    id: { type: graphql.GraphQLString }
  },
  resolve: (_, args, c) => c.auth.authenticate(_, args, c, userResolver.getUser)
};

module.exports = { userSchema, userMutations };