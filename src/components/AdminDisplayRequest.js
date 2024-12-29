import React, { useEffect } from 'react'
import '../styles/SearchAlumni.css'
import { useState } from 'react'

export default function AdminDisplayRequest() {
  
    const [result2,setresult2]=useState([]);
    const display=async ()=>{
      const data1 = await fetch('http://localhost:5000/search/getRequests' );
    const b =await data1.json();
    console.log(b)
    setresult2(b.requests);
    }
    useEffect(()=>{
      display()
    },[])
   
  
    
    const deleteAlumni=async (e,email,rno)=>{
    
      const res=await fetch('http://localhost:5000/delete/rejectRegistration',{
        method:'POST',
        body:JSON.stringify({email:email}),
        headers:{
           'Content-Type': 'application/json'
        }
      })
     const msg=await res.json()
     console.log(msg)
      
    alert("accceptd")

    }
    const acceptAlumni=async (e,email,rno)=>{
      const res=await fetch('http://localhost:5000/delete/acceptRegistration',{
        method:'POST',
        body:JSON.stringify({email:email}),
        headers:{
           'Content-Type': 'application/json'
        }
      })
     const msg=await res.json()
     console.log(msg)
      
    alert("accceptd")
    }
  return (
    <div>
       <div className="alumni-list">
        {result2.map((item, index) => (<div className="list" key={index} >
          <div id="image"> <div className="alumni"><img src={`http://localhost:5000/status/Screenshot (2).png`} alt="nofound" /></div></div>
          <div id="name" onClick={(e)=>visit(e,index)}> <div className="alumni">{item.name}</div>
            <div className="alumni">{item.email}</div>
            <div className="alumni">{item.currentPlce}</div>
          </div>
          <button id="delete" onClick={(e)=>acceptAlumni(e,item.email,item.registration_no)}>Accept</button>
          <button id="accept" style={{'backgroundColor':'green','height':'5vh','width':'5%'}} onClick={(e)=>deleteAlumni(e,item.email,item.registration_no)}>Delete</button>
          

    </div>
        ))}
    </div>
    </div>

  )
}
