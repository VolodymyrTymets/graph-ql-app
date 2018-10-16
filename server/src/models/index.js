const { Car } = require('./car');
const { User } = require('./user');

const mongooseModels = { Car, User };

module.exports = { mongooseModels };