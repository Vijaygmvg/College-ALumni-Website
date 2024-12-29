import React, { useState } from 'react';
import '../styles/reegistrion.css'
import { useNavigate } from 'react-router-dom';

const ReegistrationForm = () => {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dob: '',
    usn:'',
    currentPlace: '',
    age: '',
    phone: '',
    workingPlace: '',
    yearOfJoin: '',
    yearOfGraduation: '',
    course: '',
    branch: '',
    password1:'',
    password:'',
    photo: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
    console.log(e.target.files[0])
    console.log(formData)
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    if(formData.password!=formData.password1){
      window.alert("confirm password missmatching ")
    }

    else{
      const formDataToSend = new FormData();
  formDataToSend.append('name', formData.name);
  formDataToSend.append('email', formData.email);
  formDataToSend.append('dob', formData.dob);
  formDataToSend.append('usn', formData.usn);
  formDataToSend.append('currentPlace', formData.currentPlace);
  formDataToSend.append('age', formData.age);
  formDataToSend.append('phone', formData.phone);
  formDataToSend.append('workingPlace', formData.workingPlace);
  formDataToSend.append('yearOfJoin', formData.yearOfJoin);
  formDataToSend.append('yearOfGraduation', formData.yearOfGraduation);
  formDataToSend.append('course', formData.course);
  formDataToSend.append('branch', formData.branch);
  formDataToSend.append('password', formData.password);
  formDataToSend.append('password1', formData.password1);
  formDataToSend.append('photo', formData.photo);
      
  const response= await fetch("http://localhost:5000/newregistration",{
      method:'POST',
      body:formDataToSend
       // This header indicates that the body content is JSON
      },

      
    
    
    
  
 ).catch((err)=>console.log(err))
 const data=await response.json()
 if(response.status==500)
 {
  alert(data.msg)
 }
 else if(response.status==200)
 {
  alert("registration successfull")
  navigate('/')
 }

 
}
   
  };

  return (
    <div className="registration-form">
      <h2>Alumni Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Registration No:</label>
          <input type="text" name="usn" value={formData.usn} onChange={handleChange}  required />
        </div>
        <div className="form-group">
          <label>Date of Birth:</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Current Place:</label>
          <input type="text" name="currentPlace" value={formData.currentPlace} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Working Place:</label>
          <input type="text" name="workingPlace" value={formData.workingPlace} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Year of Joining:</label>
          <input type="number" name="yearOfJoin" value={formData.yearOfJoin} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Year of Graduation:</label>
          <input type="number" name="yearOfGraduation" value={formData.yearOfGraduation} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Course:</label>
          <select name="course" value={formData.course} onChange={handleChange} required>
            <option value="">Select Course</option>
            <option value="BE">BE</option>
            <option value="MTech">MTech</option>
            <option value="MBA">MBA</option>
            <option value="PhD">PhD</option>
            <option value="MCA">MCA</option>
          </select>
        </div>
        <div className="form-group">
          <label>Branch:</label>
          <select name="branch" value={formData.branch} onChange={handleChange} required>
            <option value="">Select Branch</option>
            <option value="CSE">CSE</option>
            <option value="EE">EE</option>
            <option value="EC">EC</option>
            <option value="MECH">MECH</option>
            <option value="EI">EI</option>
            <option value="MCA">MCA</option>
            <option value="MBA">MBA</option>
          </select>
        </div>
        <div className="form-group">
          <label>your passward</label>
          <input type="text" name="password1" value={formData.password1} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>confirm password</label>
          <input type="text" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Photo:</label>
          <input type="file" name="photo" onChange={handleFileChange} required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default ReegistrationForm;
