import React, { useEffect } from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../assets/icons/logo.png'
import white_logo from '../assets/icons/white-internee.png'
import profile_pic from '../assets/images/profile_pic.avif'
import NavLinks from './NavLinks'


export default function Navbar() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };



  const changeTheme = () => {
    setIsDarkMode(!isDarkMode);
    const htmlElement = document.documentElement;
    if (htmlElement.getAttribute('data-theme') === "dark") {
      htmlElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
    else {
      htmlElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  }

  return (
    <nav>
      <div className='nav-bar'>
        <img src={isDarkMode ? white_logo : logo} alt="logo" className="logo" />
        <NavLinks isSmallScreen={false}/>
        <div className="menu-btns">
          <a href="#" className='btn-green'>Job portal</a>
          <a href="#" className='btn-white'>Dashboard</a>
          <div className="user-profile"><img src={profile_pic} alt="profile pic" /></div>
          <div className="theme-btn" onClick={changeTheme}>
            {isDarkMode ?
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 4h.01"></path>
                <path d="M20 12h.01"></path>
                <path d="M12 20h.01"></path>
                <path d="M4 12h.01"></path>
                <path d="M17.657 6.343h.01"></path>
                <path d="M17.657 17.657h.01"></path>
                <path d="M6.343 17.657h.01"></path>
                <path d="M6.343 6.343h.01"></path>
              </svg>

              : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9"></path>
                <path d="M20 3v4"></path>
                <path d="M22 5h-4"></path>
              </svg>
            }

          </div>

          <button onClick={toggleMenu} className="hamburger">
            {isOpen ?
              <svg clip-rule="evenodd" fill-rule="evenodd" fill="white" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" /></svg>
              : <svg clip-rule="evenodd" fill-rule="evenodd" fill='white' stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 16.75c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z" fill-rule="nonzero" /></svg>}
          </button>
        </div>

      </div>

      {isOpen && 
        <NavLinks isSmallScreen={true} />
      }

    </nav>
  );
}



