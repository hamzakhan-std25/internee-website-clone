import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavLinks({ isSmallScreen }) {
    const links = [
        { path: "/", label: "Home" },
        { path: "/internship", label: "Internship" },
        { path: "/graduateProgram", label: "Graduate Program" },
        { path: "/studentAmbassador", label: "Student Ambassador" },
    ];

    return (
        <ul className={isSmallScreen ? "list-menu" : "menu"}>
            {links.map(({ path, label }) => (
                <li key={path}>
                    <NavLink to={path} style={navStyle}>
                        {label}
                    </NavLink>
                </li>
            ))}

            {isSmallScreen && (
                <li>
                    <NavLink to="/dashboard" style={navStyle}>
                        Dashboard
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="20" 
                            height="20" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            className="transform rotate-45 ml-1"
                            aria-label="Go to Dashboard"
                        >
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                        </svg>
                    </NavLink>
                </li>
            )}
        </ul>
    );
}

// Style for active link
const navStyle = ({ isActive }) => ({
    color: isActive ? 'green' : '',
});
