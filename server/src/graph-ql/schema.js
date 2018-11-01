const graphql = require('graphql');
const { userSchema, userMutations, currentUserSchema } = require('./users');
const { carSchema, carsSchema } = require('./cars');

// Define the Query type
const queryType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: {
    currentUser: currentUserSchema,
    user: userSchema,
    car: carSchema,
    cars: carsSchema,
  }
});

// Define the Mutation type
const mutation = new graphql.GraphQLObjectType({
  name: 'Mutation',
  fields: userMutations, //Object.assign({}, userMutations),
});

const schema = new graphql.GraphQLSchema({ mutation, query: queryType, });

module.exports = { schema };