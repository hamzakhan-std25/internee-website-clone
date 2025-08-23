import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';


import logo from '../assets/icons/logo.png';
import white_logo from '../assets/icons/white-internee.png';
import NavLinks from './NavLinks';

export default function Navbar({isDarkMode, setDarkMode}) {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null); // ✅ reference for mobile menu

  // ✅ Load theme from localStorage when component mounts
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setDarkMode(!isDarkMode);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // ✅ Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest(".hamburger")) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

  }, [isOpen]);

  return (
    <nav>
      <div className="nav-bar">
        <img
          src={isDarkMode ? white_logo : logo}
          alt="logo"
          className="logo"
        />

        {/* Desktop Menu */}
        <NavLinks isSmallScreen={false} />

        <div className="menu-btns">
          
          <NavLink to="/jobs" className="btn-green">Job portal</NavLink>

            <SignedOut>
              <SignInButton className='btn-green btn-bottom' />
            </SignedOut> 
          

          

          <SignedIn>
            
              <button className='btn-white'>
                DashBoard
              </button>

            <UserButton />
          </SignedIn>



          {/* Dark/Light Theme Toggle */}
          <div className="theme-btn" onClick={changeTheme}>
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9"></path>
                <path d="M20 3v4"></path>
                <path d="M22 5h-4"></path>
              </svg>
            )}
          </div>

          {/* Hamburger Menu Toggle */}
          <button onClick={toggleMenu} className="hamburger" aria-label="Toggle Menu">
            {isOpen ? (
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                fill="white" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12" /> {/* ❌ cross icon */}
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                fill="white" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 6h18M3 12h18M3 18h18" /> {/* ☰ menu icon */}
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu with outside click ref */}
      {isOpen && (
        <div ref={menuRef}>
          <NavLinks isSmallScreen={true} />
        </div>
      )}
    </nav>
  );
}
