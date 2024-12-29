const express=require('express')
const regiser=express.Router()

 regiser.post('/newregister',(req,res)=>{
    console.log("new registration page ")
    console.log(req.body)
    res.send("sucess")
 })