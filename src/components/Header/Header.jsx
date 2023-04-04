import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <nav style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
            <NavLink
                to={"/"}
                className={({ isActive }) => isActive ? "active" : ""}
            >
                Home
            </NavLink>
            <NavLink
                to={"/users"}
                className={({ isActive }) => isActive ? "active" : ""}
            >
                Users
            </NavLink>
            <NavLink
                to={"/posts"}
                className={({ isActive }) => isActive ? "active" : ""}
            >
                Posts
            </NavLink>
            <NavLink
                to={"/about"}
                className={({ isActive }) => isActive ? "active" : ""}
            >
                About
            </NavLink>
            <NavLink
                to={"/contact"}
                className={({ isActive }) => isActive ? "active" : ""}
            >
                Contact
            </NavLink>
        </nav>
    );
};

export default Header;