const express=require('express')
const mongoose=require('mongoose')
const Admin=require('../db/AdminSchema')
const reg=require('../db/registerSchema')
const bcrypt=require('bcryptjs')



const login=express.Router()



login.post('/adminlogin',async (req,res)=>{
    console.log(req.body)
  

     
    const user=await Admin.findOne({username:req.body.username}).catch((err)=>{

        res.status(404).json({msg:"username password incorrect "+err})
        return;
    })
   
    console.log(user)
    if(user==null){
        
        res.status(404).json({msg:"username password incorect "})

    }
    if(user.password==req.body.password)
    {
        res.status(200).json({msg:"success"})
        return;
    }
    else{
        res.status(404).json({msg:"usernamepassword incorrect "})
    }
   
})

login.post('/loginAlumni',async (req,res)=>{
    console.log(req.body)

    const user1=await reg.findOne({email:req.body.email}).catch((err)=>{

        res.status(404).json({msg:"username password incorrect "+err})
        return;
    })
    if(user1==null) res.status(404).json({msg:"username password incorrect "})
   
    console.log(user1)
    if(bcrypt.compare(req.body.password,user1.password))
    {
        res.status(200).json({data:user1})
        return;
    }
    else{
        res.status(400).json({msg:"usernamepassword incorrect "})
    }
   
})


module.exports=login