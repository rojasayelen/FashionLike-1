'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PosteoSchema = Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    file: {type: String, required: true},
    likes: {type: Number},
    dislikes: {type: Number},
    //date: {type: date, required: true}
});

module.exports = mongoose.model('Posteo', PosteoSchema);