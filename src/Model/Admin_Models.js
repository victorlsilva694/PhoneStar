const mongoose = require('mongoose');
const connection = require('../Schema/connection');


const AdminUsers = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Specialist: {
        type: String,
        required: true
    },
    CPF: {
        type: String,
        required: true
    },
    RG: {
        type: String,
        required: true
    },
    DateContrataion: {
        type: Date,
        default: Date.now
    },
    State: {
        type: String,
        required: true
    },
    City: {
        type: String,
        required: true
    },
    NumberIdentification: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    }
});

const AdminUsersModel = mongoose.model('AdminUsers', AdminUsers)

module.exports = AdminUsersModel;