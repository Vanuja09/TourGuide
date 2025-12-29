import React, { useState } from 'react'
import './HomeContent.css'
import img from '../assets/images/places/img1.webp'
import {languages} from '../context/language.js'

const HomeContent = () => {
const [lang, setLang] = useState(() => {
  return localStorage.getItem("language") || "engilsh";
});


  return (
    <div className='home-content'>
        <img src={img} alt="" />
        <div className='home-content-text'>
            {/* WELCOME TO TOURIST GUIDANCE */}{languages[lang].welcome}

            <button>{languages[lang].button}</button>
        </div>
    </div>
  )
}

export default HomeContent