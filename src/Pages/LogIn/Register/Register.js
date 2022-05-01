import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../Firebase.init';
import SocialLogIn from '../SocialLogIn/SocialLogIn';
import Loading from '../../Shared/Loading/Loading';
import useToken from '../../../hooks/useToken';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, error] = useUpdateProfile(auth);
    const [token] = useToken(user);

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (token) {
        navigate('/');
    }

    const handleSubmit = async event => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        alert('Updated profile');

    }

    return (
        <div className='form-container'>
            <h1 className='form-title'>Register</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="text">Name</label>
                <input type="text" name="name" id="1" placeholder='Your Name' />
                <label htmlFor="text">Email Address</label>
                <input type="email" name="email" id="2" placeholder='Enter Email' required />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="3" placeholder='Password' required />

                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="" />
                {/* <label className={agree ? 'text-primary' : 'text-danger'} htmlFor="terms">Accept genius cars terms and condition</label> */}
                <label className={`px-2 ${agree ? 'text-primary' : 'text-danger'}`} htmlFor="terms">Accept genius cars terms and condition</label>

                <input
                    disabled={!agree}
                    className='btn btn-primary w-50 mx-auto d-block'
                    type="submit"
                    value="Register" />
                <p>Already have a account! <Link to={'/login'} className='login-btn' >Please Login</Link></p>
            </form>
            <SocialLogIn></SocialLogIn>
        </div>
    );
};

export default Register;