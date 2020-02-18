const mongoose = require('mongoose');
const family = require('../controllers/families.js');
const path = require('path');
module.exports = function (app) {



    app.get('/api/read', function (req, res) {
        Family.getFamilies(req, res);
    });

    app.post('/api/new', function (req, res) {
        Family.createNewFamily(req, res);
    });

    app.get('/api/read/:id', function(req, res){
        Family.showOne(req, res);
    });


    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    }); //EVERY OTHER SPECIFIC PATH GOES BEFORE THIS PATH
}