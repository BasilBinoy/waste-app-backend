const express=require("express")
const router=express.Router()
const wastemodels=require("../models/wastemodels")

router.post("/add",async(req,res)=>{
    let data=req.body
    let waste =new wastemodels(data)
    let result=await waste.save()
    res.json({
        status:"success"
    })
})

router.get("/viewall",async(req,res)=>{
    let data =await wastemodels.find()
    res.json(data)
})


router.post("/search",async(req,res)=>{
    let input=req.body
    let data =await wastemodels.find(input)
    res.json(data)
})

module.exports=router



