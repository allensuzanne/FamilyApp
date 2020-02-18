const mongoose = require('mongoose');
const Family = mongoose.model('Family');

module.exports = {

//possible functions

    // getFamilies: function (req, res) {
    //     Family.find().sort('name')
    //         .then(data => res.json(data))
    //         .catch(err => res.json(err));
    // },

    // createNewFamily: function (req, res) {
    //     var newFamily = new Family(req.body);
    //     newFamily.save()
    //         .then(data => res.json(data))
    //         .catch(err => res.json(err));
    // },

    // showOne: function (req, res) {
    //     const { id } = req.params;
    //     Family.findOne({ _id: id })
    //         .then(data => res.json(data))
    //         .catch(err => res.json(err));
    // },

}