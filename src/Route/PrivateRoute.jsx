import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/common/Header';

const PrivateRoute = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default PrivateRoute;