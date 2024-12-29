import React, { useEffect } from 'react'
import { useState } from 'react'
import Naavigation from './Naavigation'
import image1 from '../images/clgimage1.png'
import image2 from '../images/clgimage2.png'
import image3 from '../images/clgimage3.png'
import image4 from '../images/clgimage4.png'
import Footer from './Footer'
import '../styles/home.css'

export default function Home() {
  const [i,seti]=useState(0)
    const images=[image1,image2,image3,image4]
    useEffect(()=>{
      const inter=setInterval(()=>{
        seti(i=>(i+1)%4);
        
      },3000);
      return ()=> clearInterval(inter);

    })
    
  return (
    <div>
      <Naavigation/>
      <div  className='image-container'>
      <img src={images[i]} />
      </div>
      
      <Footer/>
    </div>
  )
}
