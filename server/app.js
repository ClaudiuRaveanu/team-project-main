const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const passportLocal = require('passport-local');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bcrypt = require('bcrypt');


// Create express app
const app = express();

// Database
mongoose.connect('mongodb+srv://Danny:DannyHell1234@maincluster.hydae.mongodb.net/ProjectDB?retryWrites=true&w=majority',
{ 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}
);

const db = mongoose.connection;

db.once('open', () => {
    console.log("Connected");
})

// MiddleWare


app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:5000", // allow to server to accept request from different origin
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true, // allow session cookie from browser to pass through
  })
);
app.use(
    session({
        secret: "secretcode",
        resave: true,
        saveUninitialized: true
    })
    );
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

// Passport
const LocalStrategy = passportLocal.Strategy



// Routes
app.get('/', (req,res) => {
        res.send("hello!");
});

const BookRoutes = require('./routes/Books');

app.use('/Books', BookRoutes);

const UserRoutes = require('./routes/Users');
app.use('/Users', UserRoutes);

// Starting server
app.listen(3000, console.log("listenning on port 3000"));