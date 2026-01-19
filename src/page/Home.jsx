import React from 'react';
import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import Header from '../components/common/Header';
import useAuth from '../../hooks/useAuth';

const Home = () => {
    const {user, loading, error} = useAuth()
   
    const navigate = useNavigate()
    

    if (loading) return <p>User info loading</p>
    return (
        <div className='container mx-auto'>
            <Header />
            
        </div>
    );
};

export default Home;