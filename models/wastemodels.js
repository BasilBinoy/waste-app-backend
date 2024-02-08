const mongoose=require("mongoose")

const wasteSchema=new mongoose.Schema(
{
    Name:String,
     Phone:String,
     Street:String,
     House:String,
}

)

module.exports=mongoose.model("waste",wasteSchema)