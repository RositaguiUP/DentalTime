const User = require('./../models/user');

exports.getUser = async function(req, res){
    User.findById(req.query.id, function(err, user) {
        if(err) return res.status(500).send(err.message);
            res.status(200).jsonp(user);
    });
}

exports.getLogin = async function(req, res){
    User.find({name: req.query.name, password: req.query.password}, function(err, user) {
        if(err) return res.status(500).send(err.message);
            res.status(200).jsonp(user);
    });
}

exports.addUser = async function(req, res){
    var user = new User({
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    });

    user.save(function(err, user) {
        if(err) return res.status(500).send(err.message);
    res.status(200).jsonp(user);
    });
}

exports.updateUser = async function(req, res){
    User.findById(req.query.id, function(err, user) {
        user.name = req.body.name;
        user.lastName = req.body.lastName;
        user.email = req.body.email;
        user.password = req.body.password;

        user.save(function(err) {
            if(err) return res.status(500).send(err.message);
            res.status(200).jsonp(user);
        });
    });
}

exports.deleteUser = async function(req, res){
    User.findById(req.query.id, function(err, user) {
        user.remove(function(err) {
            if(err) return res.status(500).send(err.message);
            res.status(200).send("Usuario eliminado exitosamente");
        });
    });
}