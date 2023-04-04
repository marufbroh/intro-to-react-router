import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ user }) => {
    // console.log(user);
    const { id, name, phone, email } = user;
    return (
        <div style={{ border: '2px solid red', backgroundColor: 'Highlight', color: 'black', borderRadius: '10px', padding: '10px' }}>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p><Link to={`/users/${id}`}>Show me detailes</Link></p>
        </div>
    );
};

export default User;