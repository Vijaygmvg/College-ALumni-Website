import React, { useEffect } from 'react'
import { useState } from 'react'
import '../styles/Signupwithemail.css'
import { useNavigate } from 'react-router-dom'


export default function Signupwithemail() {
    const navigate=useNavigate()
    const [property,setproperty]=useState(true)
    const [email2,setemail2]=useState('')
    const [otp2,setotp2]=useState('')
    
    const sendotp=async (e)=>{
      e.preventDefault(); 
        const response=await fetch('http://localhost:5000/email/send-otp',{
           method:'POST',
           body:JSON.stringify({email:email2}),
           headers: {
            'Content-Type': 'application/json'  // This header indicates that the body content is JSON
          },

        }).then(res=>{
            if(res.status==200)
            {
                alert("otp snt sucessfull");
                setproperty(false)
            
                
            }
            else{
                alert("error in sending otp")
            }
        }


       

    
        
           
    ).catch((e)=>{
  console.log(e)
    })
    }
    const verifyotp=async (e)=>{
      e.preventDefault(); 
      const response=fetch('http://localhost:5000/email/verify-otp',{
        method:'POST',
        body:JSON.stringify({email:email2,otp:otp2}),
        headers: {
          'Content-Type': 'application/json'  // This header indicates that the body content is JSON
        }
      }).then((m)=>{
        if(m.status==200){
          //("otp verig=fied successfullllllll")
          navigate("/registration")
        }
        else{
          //(m.status)
        }
      }).catch((err)=>
      {
        //(err)
      })
      

    }
  
  return (
    <div>
      <form>
        <div>
            <labe>Email</labe>:<input type="email" value={email2} name="email" id="emial" class="box" onChange={(e)=>setemail2(e.target.value)}/>
            <button onClick={sendotp}>send opt</button>
            <labe>enterr otp</labe>:<input type="number"  value={otp2}disabled={true&&property} name="otp" id="otp" class="box" onChange={(e)=>setotp2(e.target.value)} />
            <button disabled={true&&property} onClick={verifyotp} id="verify">verify</button>
            
        </div>
      </form>
    </div>
  )
}
