const mongoose=require('mongoose');
const EmptyLegsBookingSchema=mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true,
    },
    type:{
        type:String,
        required:true
    },
    from:{
        type:String,
        required:true
    },
    to:{
        type:String,
        required:true
    },
    passengers:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
})
module.exports=mongoose.model('Emptylegbooking',EmptyLegsBookingSchema)