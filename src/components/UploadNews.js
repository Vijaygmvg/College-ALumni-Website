import React, { useState } from 'react';

import '../styles/UploadNews.css'; // Import the stylesheet

const UploadNews= () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState(null);
  const [submiting,setSubmiting]=useState(false)
 

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmiting(true)
  
   

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('photo', photo);


    try {
      const response = await fetch('http://localhost:5000/news/addnews',{
        method:'POST',
        body:formData,
       });


       alert("succesfullyyy uploaded")
     
      setTitle('');
      setDescription('');
      setPhoto(null);
      setSubmiting(false)
      console.log(submiting)
    } catch (err) {
     alert("failed to upload")
     setSubmiting(false)
    }
   
  };

  return (
    <div className="news-upload-container">
      <h2>Upload News</h2>
     {submiting&&<h1>news uploading.....!</h1>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" value={title} onChange={handleTitleChange} required />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea id="description" value={description} onChange={handleDescriptionChange} required />
        </div>
        <div>
          <label htmlFor="photo">Photo:</label>
          <input type="file" id="photo" onChange={handlePhotoChange} required />
        </div>
        <button type="submit" >submit</button>
      </form>
    </div>
  );
};

export default UploadNews;
