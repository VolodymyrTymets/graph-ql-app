const graphql = require('graphql');

const { userType } = require('./types/user');
const { userMutations } = require('./mutations');
const { userResolver } = require('./resolvers');

const userSchema = {
  type: userType,
  // `args` describes the arguments that the `user` query accepts
  args: {
    _id: { type: graphql.GraphQLString }
  },
  resolve: (_, args, context) => context.auth.authenticate(_, args, context, userResolver.getUser)
};

const currentUserSchema = {
  type: userType,
  resolve: (_, args, context) => context.auth.authenticate(_, args, context, userResolver.getCurrentUser)
};

module.exports = { userSchema, userMutations, currentUserSchema };