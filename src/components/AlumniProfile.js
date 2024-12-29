import React from 'react'
import '../styles/AlumniProfile.css'
import { useLocation } from 'react-router-dom';

export default function AlumniProfile() {
  const location = useLocation();
  const { state } = location;
  const selectedDate = new Date(state.DOB);

  // Format the date to exclude the time component
  const formattedDate = selectedDate.toISOString().split('T')[0];
 
  return (
    <div>
      <div className='body'>
    <div className="container">
        <div className="profile-picture">
            <img src={`http://localhost:5000/status/${state.photo.data}`} alt="Profile Picture"/>
        </div>
        <div className="details">
            <h1>{state.name}</h1>
            <p><strong>Date of Birth:</strong> {formattedDate}</p>
            <p><strong>Email:</strong> {state.email}</p>
            <p><strong>RegisterNo:</strong> {state.registration_no}</p>
            <p><strong>Phone Number:</strong> {state.phone}</p>
            <p><strong>Course:</strong>{state.Course}</p>
            <p><strong>Branch:</strong> {state. Branch}</p>
            <p><strong>Year of Joining:</strong> {state.yearOfJoining}</p>
            <p><strong>Year of Graduation:</strong>{state.yearOfGraduation}</p>
            <p><strong>instagram pfofile:</strong> vijaygm</p>
            <p><strong>Current Place:</strong> {state.currentPlace}</p>
            <p><strong>Current Working Place:</strong> {state.workingPlace}</p>
        </div>
    </div>
</div>
    </div>
  )
}
