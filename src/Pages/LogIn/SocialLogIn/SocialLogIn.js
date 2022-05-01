import React from 'react';
import google from '../../../images/social/google.png';
import facebook from '../../../images/social/facebook.png';
import github from '../../../images/social/github.png';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import useToken from '../../../hooks/useToken';

const SocialLogIn = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithFacebook, user1, loading1, error1] = useSignInWithFacebook(auth);
    const [token] = useToken(user || user1);

    let errorMessage;

    if (loading || loading1) {
        return <Loading></Loading>
    }

    if (error || error1) {
        errorMessage =
            <div>
                <p className='text-danger text-center'>Error: {error?.message} {error1?.message}</p>
            </div>
    }

    const from = location.state?.from?.pathname || "/";

    if (token) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className='d-flex justify-content-center align-items-center'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p className='mt-2 mx-2'>or</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            <div>
                {errorMessage}
                <button onClick={() => signInWithGoogle()} className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>Google Sign in</span>
                </button>
                <button onClick={() => signInWithFacebook()} className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={facebook} alt="" />
                    <span className='px-2'>Facebook Sign in</span>
                </button>
                <button className='btn btn-info w-50 d-block mx-auto'>
                    <img style={{ width: '40px' }} src={github} alt="" />
                    <span className='px-2'>Github Sign in</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogIn;