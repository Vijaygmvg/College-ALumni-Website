import React, { useState } from 'react';
import  '../styles/SearchAlumni.css'
import Filter from './Filter';
import { useNavigate } from 'react-router-dom';



function SearchAlumni() {
  const [name, setname] = useState('');
  const [Course,setCourse]=useState('---')
  const [Branch,setBranch]=useState('---')
  const [yearOfGraduation,setYog]=useState('---')
  const [searchIndex,setIndex]=useState(-1)
  const [chekbox, setchekbox] = useState(false);
  const [result, setresult] = useState([]);
 
  const changeCourse=(e)=>{
    setCourse(e.target.value)
    console.log("course updated as "+e.target.value)

  }
  const navigate=useNavigate()
  const changeBranch=(e)=>{
    setBranch(e.target.value)
    console.log("branch updated as "+e.target.value)

  }
  const changeyog=(e)=>{
    setYog(e.target.value)
    console.log(" year  updated as "+e.target.value)

  }
  const visit=(e,i)=>{
   e.preventDefault()
   setIndex(i)
  
  navigate('/profile',{state:result[i]})
  }
  
  const handleInputChange = (e) => {
    e.preventDefault();
    setname(e.target.value);
    console.log(e.target.value);
  };
  const handlecheck = () => {
    setchekbox(!chekbox);
  };

  const getAlumni = async (e) => {
    e.preventDefault();
    console.log("submitttdd");
    const query = new URLSearchParams({ Branch, Course, yearOfGraduation }).toString();
   
    const data = await fetch(`http://localhost:5000/search/reg?${query}`, {
      method: 'POST',
      body: JSON.stringify({ name: name }),
      headers: {
        'Content-Type': 'application/json' // This header indicates that the body content is JSON
      }
    }
    );
    const b = await data.json();
    setresult(b);
  };

  return (
    <>
       
      <div className="search-bar">

        <input
          type="text"
          value={name}
          onChange={handleInputChange}
          placeholder="Search..."
          className="search-input" />
        <button onClick={getAlumni} className="search-button">Search</button>

      </div>
      <div id="filters">filters
        <input type="checkbox" checked={false} onChange={handlecheck}></input>
      </div>

      {chekbox&&<Filter course={changeCourse} branch={changeBranch} yog={changeyog}/>}
      <div className="alumni-list">
        {result.map((item, index) => (<div className="list" key={index} onClick={(e)=>visit(e,index)}>
          <div id="image"> <div className="alumni"><img src={`http://localhost:5000/status/${item.photo.data}`} alt="nofound" /></div></div>
          <div id="name"> <div className="alumni">{item.name}</div>
            <div className="alumni">{item.email}</div>
            <div className="alumni">{item.currentPlace}</div>
          </div>

        </div>
        )



        )}
      </div>
    </>
  );
}

export default SearchAlumni;
