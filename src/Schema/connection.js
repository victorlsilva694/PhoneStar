const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/MultCell', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(error => handleError(error));