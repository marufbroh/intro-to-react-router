import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav style={{display: 'flex', gap: '10px', justifyContent: 'center'}}>
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
};

export default Header;