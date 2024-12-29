const express=require('express')
const bcrypt=require('bcryptjs')
const newreg = require('../db/registerSchema')
const path = require('path');
const multer=require('multer')
const register=express.Router()
const mongoose=require('mongoose')
const request=require('../db/newRequestSchema')
const {body,validationResullt}=require('express-validator')
register.use(express.json());
register.use(express.urlencoded({ extended: true }));

const uploadDir = path.join(__dirname, 'upldimg');
const Storage=multer.diskStorage({
    'destination':uploadDir,
    filename:(req,file,cb)=>
    {
        cb(null,file.originalname)
    }
 })
 const uploadimage=multer({
    storage:Storage
 }).single('photo')
 register.get('/getimages',async (req,res)=>{
    mongoose.connect("mongodb://0.0.0.0:27017/node_crud",{ useNewUrlParser: true }).then(()=>{console.log("successfullt connected ")}).catch((e)=>console.log(e))
 
     const data=await newreg.find({})
     res.json(data[29])

 })
register.post('/newregistration',uploadimage, [
    body('name').isLength({ min: 3 }).withMessage('Name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Email must be valid'),
    body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long')
],async (req,res)=>{
    
    let find= await newreg.findOne({email:req.body.email})
    if(find){

        res.status(500).json({"msg":"there is alredy exist user for this email plzz try with another "})
        console.log("hello ")
      return;
    }
    find= await newreg.findOne({ registration_no:req.body.usn})
    if(find)
    {
        res.status(500).json({"msg":"there is alredy exist user for this registratoion no  plzz try with another "})
      return;
    }

    

   try{
        const salt_rounds=8;
        const hashed_password = await bcrypt.hash(req.body.password, salt_rounds)
         const newrequest=await request({
            name:req.body.name,
            email:req.body.email,
            password:hashed_password,
            registration_no:req.body.usn,
            DOB:req.body.dob,
            phone:req.body.phone,
            currentPlace:req.body.currentPlace,
            age:req.body.age,
            workingPlace:req.body.workingPlace,
            yearOfJoining:req.body.yearOfJoin,
            yearOfGraduation:req.body.yearOfGraduation,
            Course:req.body.course,
            Branch:req.body.branch,
           
            photo:{
                data:req.file.filename,
                contentType:"image/png/jpg"
            }
        })
         const newRegister =await newreg({
             name:req.body.name,
             email:req.body.email,
             password:hashed_password,
             registration_no:req.body.usn,
             DOB:req.body.dob,
             phone:req.body.phone,
             currentPlace:req.body.currentPlace,
             age:req.body.age,
             workingPlace:req.body.workingPlace,
             yearOfJoining:req.body.yearOfJoin,
             yearOfGraduation:req.body.yearOfGraduation,
             Course:req.body.course,
             Branch:req.body.branch,
            
             photo:{
                 data:req.file.filename,
                 contentType:"image/png/jpg"
             }
         })
         newrequest.save().catch((err)=>
            {
                console.log(err)
               
            }
        )
         newRegister.save().then(async ()=>
         {
      console.log("registration succesfull")
      const obj= await newreg.find({})
     
      res.status(200).json({message:"registration successfull",detail:obj})
         }
         ).catch((err)=>
         {
             console.log(err)
             res.status(400).json({message:"registration failed"+err})
         })
        }
        catch(err){
            console.log(err)
        }
     
         
})
module.exports=register