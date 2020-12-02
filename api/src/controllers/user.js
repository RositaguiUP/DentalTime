const User = require('./../models/user');

exports.getUsers = async function(req, res){
    res.send("Hola");
}

exports.addUser = async function(req, res){
    var user = new User({
        name: req.body.name,
        password: req.body.password
    });

    user.save(function(err, tvshow) {
        if(err) return res.status(500).send( err.message);
    res.status(200).jsonp(user);
    });
    //res.send("Nuevo usuario");
}