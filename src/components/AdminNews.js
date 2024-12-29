import React from 'react';
import '../styles/DisplayNews.css';
import { useState,useEffect } from 'react';

const AdminDisplayNews = ({ title, description, imageUrl }) => {
    const [news,setNews]=useState([])

const deleteNews=async (e,title)=>{
       let q= new URLSearchParams({title}).toString();
       console.log(title)
    const resp=await fetch(`http://localhost:5000/news/delete?${q}`,{
        method:'DELETE',
        
    }).catch((err)=>{
        alert(err)
    }

)
const res=await resp.json()
  alert(res.msg)
}
    const getNews=async ()=>{
        const resp=await fetch("http://localhost:5000/news/getnews",{
            method:'GET'
        }).catch(()=>{
            alert("no news found ")
        }
    )
    const result=await resp.json()
    setNews(result.news.reverse())
    }
    useEffect(()=>
    {
        getNews()
    }

    )
  return (
    <>
    {
    news.map((item)=>(<div className="news-card">
      <img src={`http://localhost:5000/newsimg/${item.photo.data}`} alt="noimage" className="news-image" />
      <div className="news-content">
        <h2 className="news-title">{item.title}</h2>
        <div className="news-description">{item.body}</div>
        <br/>
        updated:{item.uploaded}
        <button onClick={(e)=>deleteNews(e,item.title)}>delete</button>
      </div>
    
  
    </div>
    ))
    }
    </>
  );
};

export default AdminDisplayNews;

