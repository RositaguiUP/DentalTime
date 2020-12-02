const mongoose = require('mongoose');
const { stringify } = require('querystring');

const userSchema = new mongoose.Schema({
    name: String,
    password: String
});

const User = mongoose.model('users', userSchema);

module.exports = User;