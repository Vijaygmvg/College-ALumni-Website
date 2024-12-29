

import React, { useState } from 'react';
import '../styles/LoginAdmin.css';
import { useNavigate } from 'react-router-dom';

const LoginAdmin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic here
     const resp=await fetch("http://localhost:5000/login/adminlogin",{
      body:JSON.stringify({
        username:username,
        password:password
      }),
      method:'POST',
      headers: {
        'Content-Type': 'application/json' // This header indicates that the body content is JSON
      }

     }).catch((err)=>{
      alert(err)
     })
     const result=await resp.json()
     alert(result.msg)
     if(resp.status==200){
     navigate('/adminActivity')
     }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Admin Login</h2>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default LoginAdmin;

