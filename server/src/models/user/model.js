const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const { schema } = require('./schema');
const { config } = require('../../../config');

schema.plugin(passportLocalMongoose, {
  usernameField: config.passport.usernameField,
});

const User = mongoose.model('User', schema);
module.exports = { User };