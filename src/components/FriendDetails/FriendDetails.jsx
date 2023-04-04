import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const user = useLoaderData()
    // console.log(user);
    const { id, name, phone, email, company, website } = user;
    return (
        <div>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Company: {company.name}</p>
            <p>Website: {website}</p>
        </div>
    );
};

export default FriendDetails;