const mongoose=require('mongoose');
const BookingSchema=mongoose.Schema({
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
    departure:{
        type:String,
        required:true
    },
    arrival:{
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
module.exports=mongoose.model('Booking',BookingSchema)