const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    editure: {type: String, required: true},
    description: {type: String, required: true},
    genre: {type: String, required: true},
    cover: {type: String, required: true},
    avg_grade: {type: Number, default: 0},
    pages: {type: Number, required: true},
    reviews: {type: Number, default: 0},
    publish_date: {type: Number, required: true},
    stock: {type: Number, required: true}
});

module.exports = mongoose.model('Carti',BookSchema);