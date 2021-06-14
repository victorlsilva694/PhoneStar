const express = require('express');
const routers = express.Router();
const bcrypt = require('bcrypt');
const MultCellModel = require('../Model/MultCell_Model');
const AdminUsersModel = require('../Model/Admin_Models');
const EmailUserModel = require('../Model/EmailUser_Model');
const bodyParser = require('body-parser');
const passport = require('passport');

routers.get('/', (req, res, next) => {

    res.render('Homepage');

});

routers.get('/ScheduleConsult', (req, res, next) => {

    res.render('User/Consult');

});

routers.get('/Login', (req, res, next) => {

    res.render('Admin/Login');

});

routers.post('/Email/Env', (req, res, next) => {

    let Email = req.body.Email;

    EmailUserModel.create({
        Email: Email
    }).then(() => {
        res.redirect('/');
    });

});

routers.post('/Admin/NewAccess', (req, res, next) => {

    let NumberIdentification = req.body.NumberIdentification;
    let Password = req.body.Password;

    passport.authenticate("local", {
        successRedirect: '/Admin',
        failureRedirect: '/Login',
        failureFlash: true
    })(req, res, next)

});
routers.post('/Admin/FirstAccess', (req, res, next) => {

    let passwd = 'Admin'
    let gen = 10
    let salt = bcrypt.genSaltSync(gen);
    let hash = bcrypt.hashSync(passwd, salt)

    AdminUsersModel.create({
        Name: 'Admin',
        Specialist: 'NoteBook',
        CPF: '12345',
        RG: '123456',
        State: 'São Paulo',
        City: 'Americana',
        NumberIdentification: '12345',
        Password: hash

    }).then(() => {

        res.send('200');

    });

});

routers.post('/ScheduleConsult/new', (req, res, next) => {

    const { name, LastName, Email, Title, Body } = req.body;

    MultCellModel.create({
        name: name,
        LastName: LastName,
        Email: Email,
        Title: Title,
        Body: Body
    }).then(() => {
        res.redirect('/');
    });

});

module.exports = routers;