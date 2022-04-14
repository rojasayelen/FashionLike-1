'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PosteoSchema = Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    file: {type: String, required: true},
    likes: {type: Number},
    dislikes: {type: Number},
    dateCreate: {type: Date},
    dateModify: {type: Date}
    },
    {
    timestamps: true, //es para manejar tiempos: createdAt y updatedAt
    versionKey: false //para trabajar la versión en mongoose
    }
);

module.exports = mongoose.model('Posteo', PosteoSchema);