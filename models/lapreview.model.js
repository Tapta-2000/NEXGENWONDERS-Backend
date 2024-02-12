const mongoose=require('mongoose');

const reviewlap=new mongoose.Schema({
    name:String,
    rating:String,
    image:String,
    review:String,
    explain:String

});

module.exports=mongoose.model('lapreview',reviewlap,'lapreviews');