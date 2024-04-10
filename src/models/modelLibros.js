const mongoose = require('mongoose');

const librosSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    pages: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const libros = mongoose.model('libros', librosSchema);
module.exports = libros;