const mongoose = require('mongoose');

const WishSchema = new mongoose.Schema({
    book_id: { type: String, required: true, },
});

const BorrowSchema = new mongoose.Schema({
    book_id: { type: String, required: true, },
    pickup_date: {
        type: String, // format: YYYY-MM-DD
        required: true,
    }
});

const ReservationSchema = new mongoose.Schema({
    book_id: { type: String, required: true, },
    date: {
        type: String, // format: YYYY-MM-DD 
        required: true
    },
    pickup: {
        type: String, // format: YYYY-MM-DD
        required: true,
    }
});

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: { type: String, required: true },
    isAdmin: {
        type: Boolean,
        default: false,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    }, 
    surname: {
        type: String,
        required: true
    },
    id_nr: {
        type: String,
        required: true 
    },
    phone_nr: {
        type: String,
        required: true
    },
    wishlist: [WishSchema],
    reservations: [ReservationSchema],
    borrowings: [BorrowSchema],
});

module.exports = mongoose.model('users',UserSchema);