const mongoose=require('mongoose');

const reviewfridge=new mongoose.Schema({
    name:String,
    rating:String,
    image:String,
    review:String,
    explain:String

});

module.exports=mongoose.model('fridgereview',reviewfridge,'fridgereviews');