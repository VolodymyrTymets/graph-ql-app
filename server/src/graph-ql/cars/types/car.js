const { composeWithMongoose } = require ('graphql-compose-mongoose');
const { mongooseModels } = require('../../../models');

const carType = composeWithMongoose(mongooseModels.Car).getType();

module.exports = { carType };