const mongoose = require('mongoose');

const ReviewSchema = mongoose.model({
    student_id: {type: String, required: true},
    book_id: {type: String, required: true},
    rv_title: {type: String, required: true},
    opinion: {type: String, required: true},
    bk_grade: {type: Number, required: true}
});

module.exports = mongoose.model('Reviews', ReviewSchema);