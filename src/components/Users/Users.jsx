import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            <h3>These are my Users</h3>
        </div>
    );
};

export default Users;