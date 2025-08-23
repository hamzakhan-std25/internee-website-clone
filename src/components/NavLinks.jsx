import React from 'react'
import { NavLink } from 'react-router-dom'
import { SignIn, SignedOut, SignInButton } from '@clerk/clerk-react';
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


            {
                isSmallScreen && (
                    <li>
                        <NavLink to="/jobPortal" style={navStyle}>
                            Job Potral
                        </NavLink>
                    </li>
                )
            }

            {isSmallScreen && (
                <>
                    <SignedOut>
                        <li>
                                <SignInButton className='link-btn' />

                        </li>
                    </SignedOut>

                    <SignIn >
                         <li>
                        <NavLink to="/DashBoard" style={navStyle}>
                            DashBoard
                        </NavLink>
                    </li>
                    </SignIn>




                </>
            )}
        </ul>
    );
}

// Style for active link
const navStyle = ({ isActive }) => ({
    color: isActive ? 'green' : '',
});
