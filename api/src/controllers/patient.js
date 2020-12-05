const Patient = require('../models/patient');

exports.getAllPatients = function(req, res) {
   Patient.find({idUser: req.query.idUser}, function(err, tvshows) {
   if(err) res.send(500, err.message);
        res.status(200).jsonp(tvshows);
    });
};

exports.getPatient = async function(req, res){
    Patient.findById(req.query.id, function(err, patient) {
        if(err) return res.status(500).send(err.message);
            res.status(200).jsonp(patient);
    });
}

exports.getPatientByName = async function(req, res){
    Patient.find({ name: req.query.name, idUser: req.query.idUser}, function(err, patient) {
        if(err) return res.status(500).send(err.message);
            res.status(200).jsonp(patient);
    });
}

exports.addPatient = async function(req, res){
    var patient = new Patient({
        name: req.body.name,
        lastName: req.body.lastName,
        birthday: req.body.birthday,
        address: req.body.address,
        phone: req.body.phone,
        email: req.body.email,
        idUser: req.query.idUser
    });

    patient.save(function(err, patient) {
        if(err) return res.status(500).send(err.message);
    res.status(200).jsonp(patient);
    });
}

exports.updatePatient = async function(req, res){
    Patient.findById(req.query.id, function(err, patient) {
        patient.name = req.body.name,
        patient.lastName = req.body.lastName,
        patient.birthday = req.body.birthday,
        patient.address = req.body.address,
        patient.phone = req.body.phone,
        patient.email = req.body.email

        patient.save(function(err) {
            if(err) return res.status(500).send(err.message);
            res.status(200).jsonp(patient);
        });
    });
}

exports.deletePatient = async function(req, res){
    Patient.findById(req.query.id, function(err, patient) {
        patient.remove(function(err) {
            if(err) return res.status(500).send(err.message);
            res.status(200).send("Paciente eliminado exitosamente");
        });
    });
}