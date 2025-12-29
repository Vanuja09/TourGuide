import React, { useState } from 'react'
import "./About.css"
import Navbar from '../layout/Navbar'
import img from '../assets/images/places/jaffna.jpg'
import { about } from '../context/language'

const About = () => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("language") || "engilsh";
  });

  return (
    <div  className='about'>
       <Navbar/>
       <div className='about-body'>
          <h1 >{about[lang].title}</h1>
          <img src={img} alt="" />
          <div>
             <p>{about[lang].text}</p>
            
          </div>
       </div>
       <div className='about-end'>TOUR GUIDE - @Vanija - 2025</div>
    </div>
  )
}

export default About