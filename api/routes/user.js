const express = require('express');
var UserController = require('../controllers/user');

var api = express.Router(); 

api.use(express.json());

//creamos la ruta 
api.post('/register', UserController.saveUser);
api.post('/Login', UserController.loginUser);

module.exports = api;