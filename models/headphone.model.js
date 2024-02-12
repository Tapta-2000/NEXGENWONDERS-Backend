const mongoose = require('mongoose');

const headphoneschema = new mongoose.Schema({
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
    htype: String,
    

    modelname: String,
   color:String,
    phours:String,
    hdesign:String,
    bv:String,
    mic:String,
    ws:String,

    warranty: String,
    
   
    
    
   text:String
   
})

module.exports = mongoose.model('headphone', headphoneschema, 'headphone');