const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const MultCellModel = require('../Model/MultCell_Model');
const AdminUsersModel = require('../Model/Admin_Models');
const EmailUserModel = require('../Model/EmailUser_Model');
const bodyParser = require('body-parser');
const passport = require('passport');


router.get('/Admin', (req, res, next) => {

    MultCellModel.find().then((MultCell) => {

        res.render('Admin/PanelAdmin', { MultCell: MultCell });

    });

});

router.get('/Admin/Emails', (req, res, next) => {

    EmailUserModel.find().then((EmailUser) => {

        res.render('Admin/AdminEmails', { EmailUser: EmailUser });

    });

});
router.get('/Admin/Resp/Emails', (req, res, next) => {

    EmailUserModel.find().then((EmailUser) => {

        res.render('Admin/MailResponse', { EmailUser: EmailUser })

    });
});


router.get('/Admin/Delete', (req, res, next) => {

    AdminUsersModel.find().then((AdminUsers) => {

        res.render('Admin/AdminPanelDelete', { AdminUsers: AdminUsers });

    });

});



router.get('/Admin/Update', (req, res, next) => {

    AdminUsersModel.find().then((AdminUsers) => {

        res.render('Admin/AdminPanelEdit', { AdminUsers: AdminUsers });

    });

});


router.get('/Admin/Update/Form', (req, res, next) => {

    AdminUsersModel.find().then((AdminUsers) => {

        res.render('Admin/AdminPanelEditForm', { AdminUsers: AdminUsers });

    });

});



router.post('/Admin/NewCollaborator', (req, res, next) => {

    const{ Name, Specialist, CpfUser, Rg, State, City, Password } = req.body;

    let password = Password;
    let saltRounds = 10;
    let salt = bcrypt.genSaltSync(saltRounds);
    let hash = bcrypt.hashSync(password, salt);

    AdminUsersModel.create({
        Name: Name,
        Specialist: Specialist,
        CPF: CpfUser,
        RG: Rg,
        State: State,
        City: City,
        NumberIdentification: CpfUser,
        Password: hash
    }).then(() => {

        res.redirect('/Admin');

    });

});

//Rodar rota no POSTMAN quando abrir a maquina!


router.post('/ScheduleConsult/new', (req, res, next) => {

    const { name, LastName, Email, Title, Body } = req.body;

    MultCellModel.create({
        name: name,
        LastName: LastName,
        Email: Email,
        Title: Title,
        Body: Body
    }).then(() => {
        res.redirect('/Admin');
    });

});

router.post('/Admin/Destroy', (req, res, next) => {

    AdminUsersModel.findOneAndRemove({
        _id: req.body.id
    }).then(() => {
        res.redirect('/Admin/Delete');
    });

});

router.post('/Admin/Edit', (req, res, next) => {

    const { Name, Specialist, CpfUser, Rg, State, City } = req.body;

    AdminUsersModel.findOne({_id: req.body.id}).then((AdminUser) => {

        AdminUser.Name = Name;
        AdminUser.Specialist = Specialist;
        AdminUser.CPF = CpfUser;
        AdminUser.RG = Rg;
        AdminUser.State = State;
        AdminUser.City = City;
        AdminUser.NumberIdentification = CpfUser;

        AdminUser.save().then(() => {
            res.redirect('/Admin/Update');
        });

    });

});

module.exports = router;
