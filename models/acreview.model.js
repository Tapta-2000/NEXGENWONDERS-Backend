const mongoose=require('mongoose');

const reviewac=new mongoose.Schema({
    name:String,
    rating:String,
    image:String,
    review:String,
    explain:String

});

module.exports=mongoose.model('acreview',reviewac,'acreviews');