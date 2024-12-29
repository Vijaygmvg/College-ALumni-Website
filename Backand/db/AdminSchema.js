const mongoose=require('mongoose')
const {Schema}=mongoose
const Admin=Schema(
    {
      username:{
        type:String,
        required:true
      },
      password:{
        type:String,
        required:true
      },
      email:{
        type:String,
        default:'unknown@gmail.com'

      },
       
    }
)
module.exports=mongoose.model('admin',Admin)