const mongoose=require('mongoose');

const reviewmob=new mongoose.Schema({
    name:String,
    rating:String,
    image:String,
    review:String,
    explain:String

});

module.exports=mongoose.model('mobreview',reviewmob,'mobreviews');