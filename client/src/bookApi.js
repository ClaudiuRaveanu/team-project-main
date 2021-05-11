const express = require('express');
const router = express.Router();

const Book = require('./Screens/Book');

router.get('/:id', (req, res) => {
    Book.findById(req.params.id)
    .then(book => res.json(book))
    .catch(err => res.status(404).json({noBook: 'No book found!'}));
});

module.exports = router;