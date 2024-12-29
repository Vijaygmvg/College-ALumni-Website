const express=require('express')
const multer=require('multer')

const newnews=require('../db/newsSchema')
const mongoose=require('mongoose')
const path=require('path')

const news=express.Router()
const uploadDir = path.join(__dirname, 'newsimg');
news.use(express.json());
news.use(express.urlencoded({ extended: true }));
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
 
news.post('/addnews',uploadimage,(req,res)=>
{
    console.log("helllooooooo")
    console.log(req.body)

    const addnews=newnews(
        {
            title:req.body.title,
            photo:{
            data:req.file.filename,
                 contentType:"image/png/jpg"
            },
            body:req.body.description,
        }
    )
    addnews.save().then(()=>
    {
       
        console.log("news saved successfully ")
        res.json({"msg":"saved news succesfullY"})
    }).catch((err)=>
    {
        console.log(err)
        res.json({"msg":"not saved news succesfullY"})
    })

})

news.get('/getnews',async (req,res)=>
{
   const data= await newnews.find({})
   res.json({news:data})
})
news.delete('/delete',async (req,res)=>
{
    console.log(req.body)
    console.log(req.query)
    const data=await newnews.deleteOne({title:req.query.title}).catch((err)=>
    {
        res.json({"msg":err})
    })
    if(data.deletedCount==1)
    {
        res.json({"msg":"news deleted successfullyy"})
    }
    else
    {
        res.json({"msg":"unable to delete"})
    }
})



module.exports=news