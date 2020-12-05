const mongoose = require('mongoose');
const { stringify } = require('querystring');

const patientSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    birthday: String,
    address: String,
    phone: String,
    email: String,
    idUser: String
});

const Patient = mongoose.model('patients', patientSchema);

module.exports = Patient;