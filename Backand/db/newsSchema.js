const mongoose=require('mongoose')
const {Schema}=mongoose
const news=Schema(
    {
       title:{
        type:String,
        required:true,
       },
       body:{
        type:String,
        required:true,
       },
       uploaded:{
        type:Date,
        default:Date.now()

       },
       photo:{
       
        data:String,
        contentType:String

       }

    }
)
module.exports=mongoose.model('news',news)