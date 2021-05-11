import Book from '../bookApi';
const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    nume: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    editura: {
        type: String,
        required: true
    },
    poza_coperta: {
        type: String,
        required: true
    },
    gen: {
        type: String,
        required: true
    },
    descriere: {
        type: String,
        required: true
    },
    nota_medie: {
        type: Number,
        default: 0
    },
    nr_recenzii: {
        type: Number,
        default: 0
    },
    nr_pagini: {
        type: Number,
        required: true
    },
    data_publicarii: {
        type: Number,
        required: true
    },
    stoc: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Book', BookSchema);