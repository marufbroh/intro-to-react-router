import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';

const Users = () => {
    const users = useLoaderData()
    return (
        <div>
            <h3>These are my Users {users.length}</h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px'}}>
                {
                    users.map((user) => <User user={user} key={user.id} />)
                }
            </div>
        </div>
    );
};

export default Users;