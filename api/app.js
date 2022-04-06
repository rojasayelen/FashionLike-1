const express = require('express');
const bodyParser = require('body-parser');
//const cors = require('cors');

const app = express();
//app.use(cors());


//require('dotenv').config();

//cargar rutas
var user_routes = require('./routes/user');
var posteo_routes = require('./routes/posteo');
app.use("/", user_routes);

//configuración del body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//configurar las cabeceras http

app.get("/", (req, res) => {
    res.json({message: "hola beba"})
});


module.exports = app;