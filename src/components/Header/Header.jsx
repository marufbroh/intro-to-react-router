import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>

            {/* <NavLink
                to={"/contacts"}
                style={({ isActive }) => isActive ? { color: 'red' } : ''}
            >
            </NavLink> */}
        </nav>
    );
};

export default Header;