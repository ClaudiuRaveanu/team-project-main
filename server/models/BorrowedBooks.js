const mongoose = require('mongoose');

const BorrowedBook = mongoose.model({
    student_id: {type: String, required: true},
    book_id: {type: String, required: true},
    borrow_date: {type: String, required: true}, // format: MM-DD-YYYY
    return_date: {type: String, required: true} // format: MM-DD-YYYY
});

module.exports = mongoose.model('Borrowings', BorrowedBook);