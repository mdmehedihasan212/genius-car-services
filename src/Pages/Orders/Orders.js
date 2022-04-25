import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosAuthorization from '../../api/axiosAuthorization';
import auth from '../../Firebase.init';

const Orders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const email = user.email;
        const getPost = async () => {
            const url = `http://localhost:5000/order?email=${email}`;
            try {
                const { data } = await axiosAuthorization.get(url);
                setOrders(data)
            }
            catch (error) {
                console.log(error);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth)
                    navigate('/login')
                }
            }
        }
        getPost();


    }, [user])

    return (
        <div>
            <h1>Orders: {orders.length}</h1>
        </div>
    );
};

export default Orders;