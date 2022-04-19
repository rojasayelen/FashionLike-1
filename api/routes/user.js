'use strict'

const express = require('express');
var UserController = require('../controllers/user');
const { validatorRegisterUser } = require('../validators/user')

var api = express.Router(); 

api.use(express.json());

//creamos la ruta 
api.post('/register', validatorRegisterUser, UserController.saveUser);
api.post('/Login', UserController.loginUser);

module.exports = api;