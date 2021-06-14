const mongoose = require('mongoose');
const connection = require('../Schema/connection');


const EmailUser = new mongoose.Schema({

    Email: {
        type: String,
        required: true,
    }

});

const EmailUserModel = mongoose.model('EmailUser', EmailUser)

module.exports = EmailUserModel;