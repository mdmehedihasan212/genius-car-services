import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../Firebase.init';
import Loading from '../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {

        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    console.log(user);

    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div className='mx-auto' style={{ width: "350px" }}>
            <div className="card-body">
                <h5 className="card-title">Your email not verified</h5>

                <button className='btn btn-outline-primary' onClick={async () => {
                    await sendEmailVerification();
                    toast("Sent verify email")
                }}
                >Click verify your email</button>
                <ToastContainer />
            </div>
        </div>
    }
    return children;
};

export default RequireAuth;