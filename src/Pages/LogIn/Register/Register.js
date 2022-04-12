import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../Firebase.init';

const Register = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    if (user) {
        navigate('/');
    }

    const handleSubmit = event => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);
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
                <input type="submit" value="Register" />
                <p>Already have a account! <Link to={'/login'} className='login-btn' >Please Login</Link></p>
            </form>
        </div>
    );
};

export default Register;