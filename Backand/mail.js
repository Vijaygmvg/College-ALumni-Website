const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const mail=express.Router()

mail.use(express.json())

mail.use(bodyParser.json());
const otpStore = {}

 // In-memory store for OTPs. In production, use a database.

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'youremail@gmail.com',
        pass:'password'
    },
});

function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}
mail.post('/send-otp1',(req,res)=>{
    console.log(req.body)
    
   
})
mail.post('/send-otp', (req, res) => {
    const email= req.body.email;
    const otp2 = generateOTP();
    otpStore[email] = otp2;
   console.log(email)
    const mailOptions = {
        from:'vijaygmvijaygmvg2003@gmail.com',
        to: req.body.email,
        subject: 'Your OTP Code',
        text: `Your OTP code is ${otp2}`,
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error)
            return res.status(500).send('Error sending email'+error);
        }
        console.log("otp sent successfullt"+otp2)
        res.status(200).send('OTP sent');
    });
    
});

mail.post('/verify-otp', (req, res) => {
    console.log("hello")

    const email = req.body.email;
    const otp=req.body.otp;
    

   
    console.log( otpStore[email])
    console.log(email+otp+otpStore[email])
    if (otpStore[email] === otp) {
        
        
        
         console.log(req.body)
         
                return res.status(200).send('OTP verified');
      
    }
    res.status(400).send('Invalid OTP');
   
    
    
});
module.exports=mail