import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Naavigation from './Naavigation'
import '../styles/loginalumni.css'
import { useState } from 'react';
import { useEffect } from 'react';
export default function Loginalumni() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data,setData]=useState('')
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Email:', email);
    console.log('Password:', password);
    const response= await fetch('http://localhost:5000/login/loginAlumni',{method:'POST',body:JSON.stringify({email:email,password:password}),method:'POST',
    headers: {
      'Content-Type': 'application/json' // This header indicates that the body content is JSON
    }})
    if(response.status==404){
      alert("no registration found ant "+email)
    }
    else if(response.status==200){
      const d=await response.json()
      setData(d)
      console.log(d)
      alert("successfull")
      navigate('/myprofile',{state:d.data})
      
      
    }
    else{
      alert("incorrect password ")
    }
    
 


}


  return (
    <div>
      <Naavigation/>                     

    

 


    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Gmail:</label>
          <input
            type="email"
            id="email"
            value={email}
            name="name"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>



 
    </div>
  )
}
