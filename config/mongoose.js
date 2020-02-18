const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

//----------CONNECT TO DB--------------------------------------------------
mongoose.connect('mongodb://localhost/families', { useNewUrlParser: true });
require('.././models/family.js');

var models_path = path.join(__dirname, './../models');
fs.readdirSync(models_path).forEach(function (file) {
    if (file.indexOf('.js') >= 0) {
        require(models_path + '/' + file);
    }
})