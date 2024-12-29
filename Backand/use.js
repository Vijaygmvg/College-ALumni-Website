
const use=require('express').Router()
use.get('/ravi',(req,res)=>{
    console.log("this is vijay /pagre")
   
    res.send({message:"jello",})
})
module.exports=use