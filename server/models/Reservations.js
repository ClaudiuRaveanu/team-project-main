const mongoose = require('mongoose');

const ReservationSchema = mongoose.model({
    student_id: {type: String, required: true},
    book_id: {type: String, required: true},
    posting_date: {type: String, required: true}, // format: MM-DD-YYYY
    pickup_date: {type: String, required: true}
});

module.exports = mongoose.model('Reservations', ReservationSchema);