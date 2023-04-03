import React from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h3>This is Home</h3>
            <Outlet />
        </div>
    );
};

export default Home;