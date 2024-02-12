const mongoose = require('mongoose');

const acschema = new mongoose.Schema({
    title: String,
    image: String,
    image1: String,
    image2: String,
    image3: String,


    rating: String,
    mrp: String,
    discount: String,
    finalprice: String,
    available: String,
    peoplerated: String,
    package: String,
    displaysize:String,

    modelname: String,
    brand:String,
    capacity:String,
    star:String,

    color: String,
    cc:String,
    om:String,
    idimension:String,
    iweight:String,
    od:String,
    oweight:String,
    pr:String,
    aec:String,
    ac:String,
    AR:String,
    timer:String,
    cl:String,
    slm:String,
    
   

   warranty:String,
   text:String
   
})

module.exports = mongoose.model('ac', acschema, 'acs');