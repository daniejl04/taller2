const mongoose = require('mongoose');

const libroSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    reference: {
        type: String,
        required: true
    }
}) 

const libro = mongoose.model('libro', require('libros', libroSchema))

module.exports = libro