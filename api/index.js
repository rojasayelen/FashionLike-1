const mongoose = require('mongoose');
const app = require('./app');
var port = process.env.PORT || 3977;

//capturar body

//conexión a la BS MongoDB
mongoose.connect('mongodb://localhost/users', (err, res) => {
    if(err){
        throw err;
        }else{
        console.log("La BBDD está corriendo CORRECTAMENTE");
        app.listen(port, () => 
            console.log("servidor del api rest escuchando en http://localhost:" + port)
        );
    }
});
