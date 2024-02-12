const mongoose=require('mongoose');

const reviewtv=new mongoose.Schema({
    name:String,
    rating:String,
    image:String,
    review:String,
    explain:String

});

module.exports=mongoose.model('tvreview',reviewtv,'tvreviews');