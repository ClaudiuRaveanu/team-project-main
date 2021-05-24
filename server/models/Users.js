const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
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
    }
});

module.exports = mongoose.model('users',UserSchema);