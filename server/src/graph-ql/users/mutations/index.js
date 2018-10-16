const graphql = require('graphql');
const { signUp } = require('./sign-up');
const { signIn } = require('./sign-in');

const userMutations = {
  signUp: { // <--- Sing Up
    type: new graphql.GraphQLNonNull(graphql.GraphQLString),
    args: {
      email: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
      password: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
    },
    resolve: signUp,
  },
  signIn: { // <--- Sing In
    type: new graphql.GraphQLNonNull(graphql.GraphQLString),
    args: {
      email: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
      password: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
    },
    resolve: signIn,
  }
};


module.exports = { userMutations };