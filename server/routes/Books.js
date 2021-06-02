const express = require('express');
const router = express.Router();
const Book = require('../models/Books');


// GET all routes
router.get('/', async (req,res)=>{
    const books = await Book.find(); 

    res.json(books);
});

// CREATE new book
router.post('/new',async (req,res) =>{
    const newBook = new Book(req.body);

    const savedBook = await newBook.save();

    res.json(savedBook);
})

// GET specific book
router.get('/get/:id', async (req,res) => {
    const q = await Book.findById( {_id: req.params.id} );

    res.json(q);

})

// DELETE book
router.delete('/delete/:id', async (req,res) =>{
    const result = await Book.findByIdAndDelete( {_id: req.params.id} );
    res.json(result);
})

// UPDATE book
router.patch('/update/:id', async (req,res) => {
    const update = await Book.updateOne( {_id: req.params.id}, {$set: req.body} );

    res.json(update);
});

// DELETE Review
router.patch('/deleteReview', async (req,res) =>{
    const result = await Book.findOneAndUpdate( {_id: req.body._id},{$pull:{reviews:{_id:req.body.review_id}}});
    res.json(result);
})

// GET random book
router.get('/random', async (req,res) => {
    const count = await Book.estimatedDocumentCount();
    const random = Math.floor(Math.random() * count);
    var book = await Book.findOne({stock: {$gt: 0}}, { }).skip(random);
    while (book === null) {
        book = await Book.findOne({stock: {$gt: 0}}, { }).skip(Math.floor(Math.random() * count));
    }
    Book.find().limit(10);
    res.json(book);
    // console.log(`rand = ${book}`);
})

// GET number of books
router.get('/total', async (req, res) => {
    const total = await Book.estimatedDocumentCount();

    res.json(total);
})

module.exports = router;