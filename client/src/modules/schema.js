import graphql from 'graphql';
import { authSchema } from './Auth/type'

// client schema

// Define the Query type
const queryType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: {
    auth: authSchema,
  }
});

// // Define the Mutation type
// const mutation = new graphql.GraphQLObjectType({
//   name: 'Mutation',
//   fields: userMutations, //Object.assign({}, userMutations),
// });

const schema = new graphql.GraphQLSchema({ query: queryType, });

export { schema };