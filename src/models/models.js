const mongoose = require('mongoose');

const libroSchema = new mongoose.Schema({
    titulo:String,
    genero:String,
    reference:String
    }
) 

const libro = mongoose.model('libros', libroSchema)

module.exports = libro