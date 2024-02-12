const mongoose = require('mongoose');

const smarttvschema = new mongoose.Schema({
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

    color: String,
    
    screentype: String,
    hdmi: String,
    usb:String,
    series:String,
    wmi:String,
    brightness:String,
    cr:String,
    va:String,
    ar:String,
    rr:String,
    st:String,
    svf:String,
    saf:String,
    sapps:String,


    Os: String,


    pname: String,
   smemory:String,
   weight:String,
   pmanage:String,
   pconsum:String,
   smirror:String,
   warranty:String,
   text:String
   
})

module.exports = mongoose.model('smarttvs', smarttvschema, 'smarttv');