import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div className='form-container'>
            <h1 className='form-title'>Register</h1>
            <form>
                <label htmlFor="text">Name</label>
                <input type="text" name="Your name" id="" placeholder='Your Name' />
                <label htmlFor="text">Email Address</label>
                <input type="email" name="email" id="" placeholder='Enter Email' required />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="" placeholder='Password' required />
                <input type="submit" value="Register" />
                <p>Already have a account! <Link to={'/login'} className='login-btn' >Please Login</Link></p>
            </form>
        </div>
    );
};

export default Register;