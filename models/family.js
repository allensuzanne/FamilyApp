const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//----------create schema--------------------------------------------------
const familySchema = new mongoose.Schema({
///collection here

//----------create model--------------------------------------------------
const Family = mongoose.model('Family', familySchema);