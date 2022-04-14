'use strict'

var path = require('path');
var fs = require('fs');

var Posteo = require('../models/posteo');
//const { restart } = require('nodemon');

function savePosteo(req, res) {
    var posteo = new Posteo();
    
    var params = req.body;
    
    console.log(params);

    posteo.title = params.title;
    posteo.description = params.description;
    posteo.file = params.file;
    posteo.likes = null;
    posteo.dislikes = null;
    //posteo.date = 

    posteo.save((err, posteoStored) => {
        if(err){
            res.status(500).send({message: 'error al guardar el posteo'});
        }else{
            if(!posteoStored){
                res.status(404).send({message: 'el posteo no ha sido guardado'});
            }else{
                res.status(200).send({posteo: posteoStored});
            }
        }
    });
}


function deletePosteo(req, res){
    var posteoId = req.params.id;
    
    Posteo.findByIdAndRemove(posteoId, (err, posteoRemoved)=>{
        if(err){
            res.status(500).send({message: 'error al intentar eliminar el posteo'});
        }else{
            if(!posteoId){
                restart.status(404).send({message: 'el posteo no ha sido eliminado'});
            }else{
                res.status(200).send({posteoId});
            }
        }
    });
}

module.exports = {
    savePosteo,
    deletePosteo,
};