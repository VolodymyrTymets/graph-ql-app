const { composeWithMongoose } = require ('graphql-compose-mongoose');
const { mongooseModels } = require('../../../models');

const userType = composeWithMongoose(mongooseModels.User).getType();

module.exports = { userType };