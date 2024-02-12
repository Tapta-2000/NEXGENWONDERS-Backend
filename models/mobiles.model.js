const mongoose = require('mongoose');

const mobschema = new mongoose.Schema({
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
    modelnum: String,

    modelname: String,

    type: String,
    color: String,
    Os: String,

    pname: String,
    Pcore: String,
    Pclock: String,
    Sclock: String,
    memoryslot: String,
    rom: String,
    ram: String,
    Pcamera: String,
    Scamera: String,
    nt: String,
    bv: String,
    wv: String,
    bc: String,

    bluetooth: String,
    dimension: String,
    weight: String,
    warranty: String,
    text: String
})

module.exports = mongoose.model('mobiles', mobschema, 'mobiles');