const express = require('express');
const mail=require('./mail')
const mongoose=require('mongoose')
const fed=require('./db/registerSchema')


const cors=require('cors');
const bodyParser = require('body-parser');
const app = express();

const PORT =5000;
app.use(cors())
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json())
mongoose.connect('mongodb://0.0.0.0:27017/AlumniWebsite',{ useNewUrlParser: true }).then(()=>{console.log("successfullt connected ")}).catch((e)=>console.log(e))
 
app.use('/email',require('./mail'));
app.use('/status',express.static('Routes/upldimg'))
app.use('/newsimg',express.static('Routes/newsimg'))
app.use('/news',require('./Routes/news'))
app.use('/login',require('./Routes/login'))
app.get('/rohith',(req,res)=>
{
  const  m= async ()=>{
  const x=await fetch('http://localhost:3000/vijay').then( (r)=>{

    console.log('klnkl')
    console.log(res)
     console.log(res.statusCode)
    return r.json()
  }).then(a=>console.log(a)).catch((e)=>console.log(e))
}
m();
})
app.use('/search',require('./Routes/search'))
app.use('/delete',require('./Routes/delete'))


app.get('/vijay',(req,res)=>
{
  const v=[{message:"vinay"},
    {message:"vinay"},
    {message:"vinay"},
    {message:"vinay"},
    {message:"vinay"},
    {message:"vinay"},
    {message:"vinay"},
    {message:"vinay"},
    {message:"vinay"},
    {message:"vinay"},
  ]
  

  
  res.json(v)
})
// app.get('/search',async (req,res)=>
// {
//   console.log("hello")
//   const m={name:'VIJAYA G M',age:35, workingPlace: 'jghj',
//     yearOfJoining: 34567,
//     yearOfGraduation: 677,
//     Branch: '-',}
//   const data=await fed.findOne(m)
//   console.log(data)
// })
app.use('/',require('./Routes/registration'))
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
