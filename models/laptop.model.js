const mongoose=require('mongoose');

const lapschema=new mongoose.Schema({
    title:String,
    image:String,
    image1:String,
    image2:String,
    image3:String,

        
    rating:String,
    mrp:String,
    discount:String,
    finalprice:String,
    available:String,
    peoplerated:String,
    package:String,
    modelnum:String,
    part:String,
    modelname:String,
    series:String,
    type:String,
    color:String,
    pbrand:String,
    pname:String,
    ssd:String,
    ram:String,
    emmc:String,
    clock:String,
    ramf:String,
    cache:String,
    gp:String,
    cores:String,
    osa:String,
    os:String,
    ts:String,
    sr:String,
    speaker:String,
    bluetooth:String,
    weight:String,
        screen:String,
        screensize:String,
        text:String
    })

    module.exports=mongoose.model('laptop',lapschema,'laptops');