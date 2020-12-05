const mongoose = require('mongoose');
const { stringify } = require('querystring');

const treatmentSchema = new mongoose.Schema({
    name: String,
    cost: String,
    idUser: String
});

const Treatment = mongoose.model('treatments', treatmentSchema);

module.exports = Treatment;