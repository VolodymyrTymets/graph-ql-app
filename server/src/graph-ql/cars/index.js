const graphql = require('graphql');

const { carType } = require('./types');
const { carResolver } = require('./resolvers');

const carSchema = {
  type: carType,
  args: {
    _id: { type: graphql.GraphQLString }
  },
  resolve: carResolver.getCar,
};

const carsSchema = {
  type: new graphql.GraphQLList(carType),
  resolve: carResolver.getCars,
};

module.exports = { carSchema, carsSchema };