const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    password:String
  
})

module.exports = mongoose.model('Userdetails', userschema, 'userdetails');