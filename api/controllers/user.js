var bcrypt = require('bcrypt');
var User = require('../models/user');
var jwt = require('../services/jwt');
var fs = require('fs');
var path = require('path');

function saveUser(req, res) {
        
    var user = new User(); // creamos la instancia de un admin

    var params = req.body;
    
    console.log(params);

    user.name = params.name;
    user.surname = params.surname;
    user.email = params.email;
    user.role = 'ROLE_USER';
    
    if(params.password){
        //encripta contraseña 
       
        bcrypt.hash(params.password, 10, function(err, hash){
           user.password = hash;
            if(user.name != null && user.surname != null && user.email != null){
                // guardar el usuario
                console.log(hash)
                user.save((err, userStored) =>{
                    if(err){
                        console.log(err);
                        res.status(500).send({message:'Error al guardar el usuario'})
                    }else{
                        if(!userStored) {
                            res.status(404).send({message:'No se ha registrado el usuario'})
                        }else{
                            res.status(200).send({user: userStored});
                        }
                    }
                });
            }else{
                res.status(200).send({message:'introduce todos los campos'})
            }
        })
    }else{
        res.status(200).send({message:'debe ingresar contraseña'})  
    }
    
};

function loginUser(req, res){
    var params = req.body;

    console.log(params);
    
    var email = params.email;
    var password = params.password;

    User.findOne({email: email.toLowerCase()}, (err, user) =>{
        if(err){
            res.status(500).send({message: 'Error en la petición'});
        }else{
            if(!user){
                res.status(404).send({message: 'El usuario no existe'});
            }else{
                // comprobar la contraseña
                bcrypt.compare(password, user.password, function(err, check){
                    if(check){
                        //devolver los datos del usuario logueado
                        if(params.gethash){
                              //devolver un token de jwt  
                        }else{
                            res.status(200).send({user});
                        }
                    }else{
                        res.status(404).send({message: 'El usuario no ha podido loguearse'});
                    }
                });
            }
        }
    });
}

module.exports = {
    saveUser,
    loginUser
}