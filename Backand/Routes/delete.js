const express=require('express')
const newreg = require('../db/registerSchema')
const request=require('../db/newRequestSchema')
const mongoose=require('mongoose')

const delet=express.Router()
delet.post('/reg',async (req,res)=>{
   
   console.log("kbskdjb")
   const deleted=await newreg.deleteOne({ email:req.body.email})
   if(deleted.deletedCount==1)
   {
    
    console.log("deleted succesuufuly")
    
    res.json({"message":"deteted successfully"})
   }
   else
   {
    console.log("not sucessfu;;y")
   
    res.json({"message":"unable to delte may be not found registration"})
   }


})
delet.post('/acceptRegistration',async (req,res)=>{
   

   const deletedaccept=await request.deleteOne({ email:req.body.email})
   if(deletedaccept.deletedCount==1)
   {
    
    console.log("deleted succesuufuly")
    
    res.json({"message":"deteted successfully"})
   }
   else
   {
    console.log("not sucessfu;;y")
   
    res.json({"message":"unable to delte may be not found registration"})
   }


})
delet.post('/rejectRegistration',async (req,res)=>{
   

   const deletedreject1=await request.deleteOne({ email:req.body.email})
   const deletedreject2=await newreg.deleteOne({email:req.body.email})
   if(deletedreject1.deletedCount==1&&deletedreject2.deletedCount==1)
   {
    
    console.log("deleted succesuufuly")
    
    res.json({"message":"deteted successfully"})
   }
   
   else
   {
    console.log("not sucessfu;;y")
   
    res.json({"message":"unable to delte may be not found registration"})
   }
}
)
  
   delet.post('/deleteProfile',async (req,res)=>{
   

      const deletedreject1=await request.deleteOne({ email:req.body.email})
      const deletedreject2=await newreg.deleteOne({email:req.body.email})
      if(deletedreject1.deletedCount==1)
      {
       
       console.log("deleted succesuufuly")
       
       res.status(200).json({"message":"deteted successfully"})
      }
      
      else
      {
       console.log("not sucessfu;;y")
      
       res.status(400).json({"message":"unable to delte may be not found registration"})
      }
     
   

})







module.exports=delet;