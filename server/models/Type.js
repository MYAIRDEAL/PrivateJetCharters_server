const mongoose=require('mongoose');
const TypeSchema=mongoose.Schema({
   section:{
    type:String,
    required:true
   },
   active:{
    type:String,
    required:true
   }
})
module.exports=mongoose.model('type',TypeSchema)