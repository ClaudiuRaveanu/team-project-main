const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/Users');

router.post('/register', async (req,res) => {
    //username, password
    const { username, password } = req?.body;
    if(!username || !password, typeof username !== "string" || typeof password !== "string"){
        res.send('Improper Values!');
        return;
    }

    User.findOne({ username }, async (err,doc) => {
        if(err) throw err;
        if(doc) res.send('User already exists');
        if(!doc){
            const hashedPassword = await bcrypt.hash(password,10)
            const newUser = new User({
                username: username,
                password: hashedPassword
            });
            await newUser.save();
            res.send('Success')
        }
    })

    
}

);


module.exports = router;