const Treatment = require('../models/treatment');

exports.getAllTreatments = function(req, res) {
   Treatment.find(function(err, tvshows) {
   if(err) res.send(500, err.message);
        res.status(200).jsonp(tvshows);
    });
};

exports.getTreatment = async function(req, res){
    Treatment.findById(req.query.id, function(err, treatment) {
        if(err) return res.status(500).send(err.message);
            res.status(200).jsonp(treatment);
    });
}

exports.getTreatmentByName = async function(req, res){
    Treatment.find({ name: req.query.name}, function(err, treatment) {
        if(err) return res.status(500).send(err.message);
            res.status(200).jsonp(treatment);
    });
}

exports.addTreatment = async function(req, res){
    var treatment = new Treatment({
        name: req.body.name,
        cost: req.body.cost,
        idUser: req.body.idUser
    });

    treatment.save(function(err, treatment) {
        if(err) return res.status(500).send(err.message);
    res.status(200).jsonp(treatment);
    });
}

exports.updateTreatment = async function(req, res){
    Treatment.findById(req.query.id, function(err, treatment) {
        treatment.name = req.body.name,
        treatment.cost = req.body.cost,
        treatment.idUser = req.body.idUser

        treatment.save(function(err) {
            if(err) return res.status(500).send(err.message);
            res.status(200).jsonp(treatment);
        });
    });
}

exports.deleteTreatment = async function(req, res){
    Treatment.findById(req.query.id, function(err, treatment) {
        treatment.remove(function(err) {
            if(err) return res.status(500).send(err.message);
            res.status(200).send("Tratamiento eliminado exitosamente");
        });
    });
}