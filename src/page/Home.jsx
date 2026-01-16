import React from 'react';
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';

const Home = () => {
    const [user, loading, error] = useAuthState(auth)
    const navigate = useNavigate()

    const handleLogout = () =>{
        signOut(auth).then(()=>{
            navigate('/')
            toast.success('Sign Out')
        })
    }

    if(loading) return <p>User info loading</p>
    return (
        <div>
            Home
            <button onClick={handleLogout}>sign out</button>
        </div>
    );
};

export default Home;