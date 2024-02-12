const mongoose=require('mongoose');

const reviewhead=new mongoose.Schema({
    name:String,
    rating:String,
    image:String,
    review:String,
    explain:String

});

module.exports=mongoose.model('headreview',reviewhead,'headreviews');