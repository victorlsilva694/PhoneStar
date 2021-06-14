const Local_Strategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const AdminUsersModel = require('../Model/Admin_Models');

module.exports = function(passport){

    passport.use( new Local_Strategy({usernameField: 'NumberIdentification', passwordField: 'Password'}, (NumberIdentification, Password, done) => {
        AdminUsersModel.findOne({NumberIdentification: NumberIdentification}).then((user) => {
            if(!user){
                return done(null, false, {Message: 'Account not found!'} );
            }

            bcrypt.compare(Password, user.Password, (err, success) => {
                if(success){
                    return done(null, user);
                }
                else{
                    return done(null, false, {Message: 'Password Incorrect'});
                }
            })
        })
    }))

    passport.serializeUser(( user, done ) => {
        return done(null, user.id)
    });

    passport.deserializeUser( (id, done) => {
        AdminUsersModel.findById(id, (err, user) => {
            done(err, user);
        });
    });

}