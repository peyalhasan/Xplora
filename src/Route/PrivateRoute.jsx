import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/common/Header';
import Footer from '../page/Footer';

const PrivateRoute = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default PrivateRoute;