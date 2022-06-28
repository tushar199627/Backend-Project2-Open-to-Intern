const mongoose =require("mongoose")
const internModel=require("../models/internModel.js")




const createIntern= async function(req,res){
    
    data=req.body
    if(object.keys(data).length==0) return res.status(400).send({status:false,msg:"please enter the data related to intern" })

internData= await internModel.create(data)
res.status(201).send({status:true,data:internData})


}









module.exports.createIntern=createIntern
