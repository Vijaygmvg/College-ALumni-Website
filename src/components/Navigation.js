import React from 'react';
import  {useState}  from 'react';
import logo from '../vijay.png'; 
import '../styles/Navigation.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
// import Home from './Home.js'
// import Login from './Loginadmin.js'
// import Signup from './Signupwithemail'
// import MyOrder from './Loginalumni.js'
// import App from '../App.js'
// import Register from './Register.js'
export default function Navigation() {
    const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
   
    <div>
       
       <div className="App">
      <input type="checkbox" id="nav-toggle" className="nav-toggle" checked={showNav} onChange={toggleNav} />
      <label htmlFor="nav-toggle" className="nav-toggle-label">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
       
          <ul className={`nav-links ${showNav ? 'show' : ''}`}>
          <li><Link to="/" >Home</Link></li>
          <li><a href='/'>about college</a></li>
          
          <li><Link to="/signup">signup</Link></li>
          

          <li><Link to="/register">Registration</Link></li>
          <li><Link to="/loginAdmin">loginadmin</Link></li>
          <li><Link to="/loginALumni">Products</Link></li>
         
      
   
        </ul>
       
 

      </nav>
      
    </div>
    
    
    </div>
    
    
  )
}
