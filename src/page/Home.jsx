import React from 'react';
import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import Header from '../components/common/Header';
import useAuth from '../../hooks/useAuth';
import usePlace from '../../hooks/usePlace';
import Hero from '../components/Home/Hero';
import DiscountOffer from './DiscountPage';
import Destination from '../components/Destination';
import Membership from './Membership';

const Home = () => {
    const { data, isLoading } = usePlace()



    if (isLoading) return <p>User info loading</p>
    return (
        <div className='w-full'>
            <div className='container mx-auto '>
                <Hero />
                <DiscountOffer />
                <Destination />
                <Membership />
            </div>
        </div>
    );
};

export default Home;