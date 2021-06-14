const mongoose = require('mongoose');
const connection = require('../Schema/connection');


const PhoneStar = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    LastName: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    Title: {
        type: String,
        required: true, 
    },
    Body: {
        type: String,
        required: true, 
    },
    DateNow: {
        type: Date,
        default: Date.now
    }
});

const PhoneStarModel = mongoose.model('PhoneStar', PhoneStar)

module.exports = PhoneStarModel;