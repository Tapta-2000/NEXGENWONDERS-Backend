const mongoose = require('mongoose');

const fridgeschema = new mongoose.Schema({
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
    brand:String,

    modelname: String,
    warranty:String,
    type:String,
    capacity:String,
    star:String,
    mc:String,
    is:String,

    color: String,
    
    nod: String,
    h: String,
    width:String,
    d:String,
    weight:String,
    
    ciw:String,
    nciw:String,
    
    
   text:String
   
})

module.exports = mongoose.model('fridge', fridgeschema, 'fridge');