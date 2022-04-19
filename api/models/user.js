'use strict'

const {Schema, model}  = require('mongoose');
//var Schema = mongoose.Schema;

var UserSchema = Schema({
    name: {type: String, required: true},
    surname: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    role: {type: ["user", "admin"], default: "user"},
    },
    {
    timestamps: true, //es para manejar tiempos: createdAt y updatedAt
    versionKey: false //para trabajar la versión en mongoose
    }
);

module.exports = model('User', UserSchema);