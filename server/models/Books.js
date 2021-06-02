const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    book_id: {type: String, required: true},
    rv_title: {type: String, required: true},
    opinion: {type: String, required: true},
    grade: {type: Number, required: true},
    anon: {type: Boolean, required: true},
    student_name: {type:String}
});

const BookSchema = new mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    editure: {type: String, required: true},
    description: {type: String, required: true},
    genre: {type: String, required: true},
    cover: {type: String, required: true},
    avg_grade: {type: Number, default: 0},
    pages: {type: Number, required: true},
    publish_date: {type: Number, required: true},
    stock: {type: Number, required: true},
    reviews: [ReviewSchema]
});

module.exports = mongoose.model('Books',BookSchema);