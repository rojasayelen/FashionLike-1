'use strict'

var express = require('express');
var PosteoController = require('../controllers/posteo');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');


api.post('/posteo', md_auth.ensureAuth, PosteoController.savePosteo);
api.delete('/posteo/id', md_auth.ensureAuth, PosteoController.deletePosteo);

module.exports = api;