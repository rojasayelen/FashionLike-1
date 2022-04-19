'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());



//cargar rutas
var user_routes = require('./routes/user');
var posteo_routes = require('./routes/posteo');
//app.use("/", user_routes);

//configuración del body-parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//configurar las cabeceras http

//lineas comentadas por Aye
// app.get("/", (req, res) => {
//     res.json({message: "hola beba"})
// }); 

//rutas base
   
app.use('/api', user_routes);//estoy utilizando un middleware 
app.use('/api', posteo_routes);

module.exports = app;