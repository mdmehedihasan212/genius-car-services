import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogIn from '../SocialLogIn/SocialLogIn';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageName from '../../Shared/PageName/PageName';

const LogIn = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, error, sending] = useSendPasswordResetEmail(
        auth
    );

    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    const handleRegistration = event => {
        navigate('/register');
    }

    const handlePasswordReset = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email)
            toast('Sent email')
        }
        else {
            toast('Enter your email')
        }
    }

    return (
        <div className='container w-50 mx-auto mt-5'>
            <div className="row">
                <PageName title="Login"></PageName>
                <h1 className='text-primary text-center'>Login</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button className='w-50 mx-auto d-block mb-2' variant="primary" type="submit">
                        Login
                    </Button>
                    <p>New a genius car? <Link to={'/register'} className='text-center text-primary' onClick={handleRegistration}>Please Register</Link></p>
                    <p>Are you forget password? <button className='text-center text-primary btn btn-link' onClick={handlePasswordReset}>Reset Password</button></p>
                </Form>
            </div>
            <ToastContainer />
            <SocialLogIn></SocialLogIn>
        </div>
    );
};

export default LogIn;