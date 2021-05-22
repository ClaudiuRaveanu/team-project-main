const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/Users');
const passportLocal = require('passport-local');
const passport = require('passport');

// Passport local

const LocalStrategy = passportLocal.Strategy

passport.use(new LocalStrategy((username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
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

router.post('/login',passport.authenticate('local'), (req,res) => {
    res.send(req.user);
})

router.get('/user', (req,res) => {
    res.send(req.user);
})

router.get("/logout", (req, res) => {
    req.logout();
    res.send("success")
  });

module.exports = router;