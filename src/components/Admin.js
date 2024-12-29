import '../styles/Admin.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';


const AdminPage = () => {
    const navigate=useNavigate()
   const removeNews=()=>{
    navigate('/adminnews')
   }
    const addAlumni=(e)=>
    {
        e.preventDefault()
        navigate("/registration")
        
    }
    const addNews=(e)=>{
      e.preventDefault()
      navigate("/addnews")
    }
    const removeAlumni=(e)=>
    {
      e.preventDefault()
      navigate("/adminsearchalumni")

    }
    const requests=()=>{
      navigate('/adminrequest')
    }

  return (
    <div className="container">
      <h1 className="title">Choose an Activity</h1>
      <div className="button-container">
        <button
          className="activity-button"
          onClick={addNews}
         
        >
         Add news 
        </button>
        <button
          className="activity-button"
          onClick={removeNews}
        >
       Remove news
        </button>
        <button
          className="activity-button"
        onClick={addAlumni}
        >
        Add Alumni
        </button>
        <button
          className="activity-button"
        onClick={removeAlumni}
        >
         Remove Alumni
        </button>
        <button
          className="activity-button"
          onClick={requests}
         
        >requests 
        </button>
      </div>
    </div>
  );
};

export default AdminPage;


