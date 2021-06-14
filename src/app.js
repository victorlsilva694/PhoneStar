const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const index = require('./Routes/Routes');
const Users = require('./Routes/User');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('flash');
const session = require('express-session');
require('./config/auth')(passport)

app.use(session({
    secret: 'MultCellAdminEntry',
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 2 * 60 * 1000}
}));

function authenticateMiddleware(req, res, next){
    if(req.isAuthenticated()){
        return next()
    }
}
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use('/', Users);
app.use('/', authenticateMiddleware, index);


module.exports = app;