import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const getPost = async () => {
            const url = `http://localhost:5000/order`;
            const { data } = await axios.get(url);
            setOrders(data)
        }
        getPost();


    }, [])

    return (
        <div>
            <h1>Orders: {orders.length}</h1>
        </div>
    );
};

export default Orders;