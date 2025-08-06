import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavLinks({ isSmallScreen }) {
    return (
        <ul className={isSmallScreen ? "list-menu" : "menu"}>
            <li><NavLink to="/" style={navStyle} >Home</NavLink> </li>
            <li><NavLink to="/internship" style={navStyle} >Internship</NavLink> </li>
            <li><NavLink to="/graduateProgram" style={navStyle}>Graduate Program</NavLink> </li>
            <li><NavLink to="/studentAmbassador" style={navStyle}>Student Ambassador</NavLink> </li>
            {isSmallScreen && <li>Dashboard <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transform rotate-45">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
            </svg></li>}
        </ul>
    )
}

// Style for active link
const navStyle = ({ isActive }) => ({
    color: isActive ? 'green' : '',
});
