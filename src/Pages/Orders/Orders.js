import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosAuthorization from '../../api/axiosAuthorization';
import auth from '../../Firebase.init';
import './Order.css';

const Orders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const email = user?.email;
        const getPost = async () => {
            const url = `https://afternoon-lowlands-28127.herokuapp.com/order?email=${email}`;
            try {
                const { data } = await axiosAuthorization.get(url);
                setOrders(data)
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth)
                    navigate('/login')
                }
            }
        }
        getPost();


    }, [user])

    return (
        <div className='text-center mt-4'>
            <h1>Orders: {orders.length}</h1>
            {
                orders.map(order => <div key={order._id}>
                    <div className='order-service'>
                        <h4>{order.service}</h4>
                        <h5>{order.email}</h5>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Orders;