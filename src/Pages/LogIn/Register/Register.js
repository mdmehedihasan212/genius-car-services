import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {

    const handleSubmit = event => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, email, password);
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