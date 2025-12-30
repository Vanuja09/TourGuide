import React, { useState } from 'react'
import './Navbar.css'
import img from '../assets/images/logo2.png'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [selectl,setSelectl] =useState(() => {
      return localStorage.getItem("language") || "engilsh";
    });

    const [selectlink,setSelectlink] =useState(() => {
      return localStorage.getItem("link") || "/";
    });

    const navigation = useNavigate();

    const  handleClickLanguage = (data) =>{
        setSelectl(data);
        localStorage.setItem("language", data);
        window.location.reload()
    }
    const  handleLinkClick = (data) =>{
        localStorage.setItem("link", data);
        // window.location.reload()
        navigation(data)
    }
  return (
    <div className='navbar'>
        <div className='navbar-logo'> 
            <img src={img} alt="" />
            <div>TOUR GUIDE</div>
        </div>
        <div className='navbar-content'>
            <div className='navbar-lists'>
                <a className={selectlink === '/'?"aselect":"anonselect"} onClick={()=>handleLinkClick('/')} >Home</a>
                {/* <a className={selectlink === '/services'?"aselect":"anonselect"} onClick={()=>handleLinkClick('/services')}  >Services</a> */}
                <a className={selectlink === '/contact'?"aselect":"anonselect"} onClick={()=>handleLinkClick('/contact')}  >Contact</a>
                <a className={selectlink === '/help'?"aselect":"anonselect"} onClick={()=>handleLinkClick('/help')} >Help</a>
                <a className={selectlink === '/about'?"aselect":"anonselect"} onClick={()=>handleLinkClick('/about')} >About</a>
            </div>
            <div className='navbar-language'>
                {/* <button className='navbar-login'>Login</button>   
                <button className='navbar-signup'>Signup</button> */}
                <div className={selectl === 'tamil'?"select":"non-select"} onClick={()=>handleClickLanguage("tamil")}>தமிழ்</div>
                <div className={selectl === 'engilsh'?"select":"non-select"} onClick={()=>handleClickLanguage("engilsh")}>English</div>
                <div className={selectl === 'sinhala'?"select":"non-select"} onClick={()=>handleClickLanguage("sinhala")}>සිංහල</div>

            </div>
        </div>
    </div>
  )
}

export default Navbar