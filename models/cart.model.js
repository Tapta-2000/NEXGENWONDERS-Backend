const mongoose=require('mongoose');

const cartschema=new mongoose.Schema({
   id:String,
    image:String,
    title:String,
    finalprice:String,
    available:String,
    email:String
})

module.exports=mongoose.model('cart',cartschema,'Cart');