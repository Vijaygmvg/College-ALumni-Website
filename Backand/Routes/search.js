const express=require('express')
const search=express.Router()
const registerd=require('../db/registerSchema')
const requests=require('../db/newRequestSchema')
search.use(express.json())
search.use(express.urlencoded())

search.post('/reg',async (req,res)=>
{
    const fect={}
    if(req.query['yearOfGraduation']!='---'){
      req.query['yearOfGraduation']=Number( req.query['yearOfGraduation'])
    }
    const arr=Object.keys(req.query)

   arr.map( (ke)=>{
        console.log(arr+ke +" and "+req.query[ke])
        if(req.query[ke]!='---'){
            fect[ke]=req.query[ke]
        }

      })
      
      console.log(fect)
      
    console.log("helo good")
    console.log(req.body.name)
    console.log(req.query)
    console.log(fect)
    const data=await registerd.find({$and:[{name: new RegExp(req.body.name, 'i')},fect]},{password:0})
    
    console.log(data)
    res.json(data)
  



})
search.get('/getRequests',async (req,res)=>{
const data=await requests.find({},{password:0})
console.log(data)
res.json({requests:data})


})
module.exports=search