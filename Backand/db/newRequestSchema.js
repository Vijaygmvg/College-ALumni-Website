const mongoose=require('mongoose')
const {Schema}=mongoose

const newRequest=new Schema({
    name:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
        

    },
    registration_no:{
        type:String,
        unique:true,
        require:true,

    },
    DOB:{
        type:Date,
        required:true,

    },
    phone:{
        type:Number,
        default:123456789,
    },
    currentPlace:{
        type:String,

    },
    age:{
        type:Number,
    },
    workingPlace:{
        type:String
    },
    yearOfJoining:{
        type:Number,
        require:true,

    }, yearOfGraduation:{
        type:Number,
        require:true,
        
    },
    Course:{
        type:String,
        require:true,
    },
    Branch:{
        type:String,
        default:"-"
    },
    photo:{
        data:String,
        contentType:String,
    },
     time:{
        
        
                type:Date,
                default:Date.now()
            
        
     }


})
module.exports=mongoose.model('NewRequest',newRequest)
