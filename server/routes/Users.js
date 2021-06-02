const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/Users');
const Book = require('../models/Books');
const passportLocal = require('passport-local');
const passport = require('passport');

// Passport local

const LocalStrategy = passportLocal.Strategy

passport.use(new LocalStrategy((email, password, done) => {
    User.findOne({ email: email }, (err, user) => {
      if (err) throw err;
      if (!user) return done(null, false);
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) throw err;
        if (result === true) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    });
  })
  );
  
  passport.serializeUser((user, cb) => {
    cb(null, user._id);
  });
  
  passport.deserializeUser((id, cb) => {
    User.findOne({ _id: id }, (err, user) => {
      const userInformation = {
        email: user.email,
        username: user.username,
        isAdmin: user.isAdmin,
        id: user._id
      };
      cb(err, userInformation);
    });
  });
// Routes
router.post('/register', async (req,res) => {
    //username, password
    const { username, password, id_nr, phone_nr, email, surname, } = req?.body;
    if(username === "" || password === ""){
        res.send('Nu au fost completate toate câmpurile');
        return;
    }

    User.findOne({ email }, async (err,doc) => {
        if(err) throw err;
        if(doc) res.send('Deja există un utilizator cu acest e-mail');
        if(!doc){
            const hashedPassword = await bcrypt.hash(password,10)
            const newUser = new User({
                username: username,
                password: hashedPassword,
                id_nr: id_nr,
                phone_nr: phone_nr,
                email: email,
                surname: surname
            });
            await newUser.save();
            res.send('Utilizator înregistrat cu succes')
        }
    })

    
}

);

router.post('/login',passport.authenticate('local'), (req,res) => {
    res.send(req.user); 
})

router.get('/user', (req,res) => {
    res.send(req.user);
})

router.get('/currentUser', async (req, res) => {
  if (req.user !== undefined) {
    const account = await User.findOne({ username: req.user.username }); 

    res.json(account)
  } else res.json(undefined);
})

router.patch('/update/:id', async (req, res) => {
    const account = await User.updateOne({ _id: req.params.id }, { $set: req.body });

    res.json(account)
}) 

router.get('/getUsers', async (req,res) => {
  const users = await User.find({}, (err,data) => {
    if(err) throw err;
    return data;
  })
  res.send(users);
})

router.get('/wishlist', async (req, res) => {
  const wishes = await User.findOne({ username: req.user.username }, { wishlist: 1 });

  let books = []; 

  //console.log(wishes.wishlist.length);

  for (let i = 0; i < wishes.wishlist.length; i++) {
    let b = await Book.findOne({ _id: wishes.wishlist[i].book_id }); 
    //console.log(b);
    books.push(b);
  }

  res.json(books);
})

// DELETE wishlist
router.patch('/deleteWishlist', async (req,res) =>{
  const result = await User.findOneAndUpdate( { _id: req.body._id },{$pull:{wishlist:{_id:req.body.wishlist_id}}});
  // res.send(req.body);
  res.json(result);
})

router.get("/logout", (req, res) => {
    req.logout(); 
    res.send("success")
  });
 
module.exports = router;