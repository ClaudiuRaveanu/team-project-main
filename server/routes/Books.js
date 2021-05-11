const express = require('express');
const router = express.Router();
const Book = require('../models/Books');


// GET all routes
router.get('/dashboard', async (req,res)=>{
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
// GET random book
router.get('/random', async (req,res) => {
    const count = await Book.where({ author: req.body.author}).countDocuments()
    const random = Math.floor(Math.random * count);
    const book = await Book.findOne().skip(random);
    //Book.find().limit(10);
    res.json(count);
})


module.exports = router;