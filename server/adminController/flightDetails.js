const flightDetails=require("../models/FlightDetails");
exports.getAllPushData=async(req,res)=>{
    try {
        const data=await flightDetails.find({})
        if(!data){
            return res.status(404).json({message:"No Flights currently"})
        }
        return res.status(200).json({message:"flight details fetched successfully",data:data})
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Internal server Error"})
    }
}