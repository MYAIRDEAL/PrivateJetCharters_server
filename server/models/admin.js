const mongoose = require('mongoose');
const AdminSchema=mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        enum:["user-admin","operator","broker","super-admin"]
    },
    name:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('admin',AdminSchema);