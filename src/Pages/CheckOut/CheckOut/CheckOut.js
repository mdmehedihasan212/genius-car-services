import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetails from '../../../hooks/useServiceDetails';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const CheckOut = () => {
    const { serviceId } = useParams();
    const [services] = useServiceDetails(serviceId)
    const [user] = useAuthState(auth);

    // const [user, setUser] = useState({
    //     name: 'Md Mehedi Hasan',
    //     email: 'mdmehedihasan384@gmail.com',
    //     address: 'Rupatali Arafat Housing, Barishal',
    //     phone: '017'
    // });

    // const handlePhoneChange = event => {
    //     console.log(event.target.value);
    //     const { phone, ...rest } = user;
    //     const newPhone = event.target.value;
    //     const newUser = { phone: newPhone, ...rest };
    //     setUser(newUser);
    //     console.log(newUser);
    // }

    const handleToSubmit = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: services.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('http://localhost:5000/order', order)
            .then(res => {
                console.log(res);
                const { data } = res;
                if (data.insertedId) {
                    toast('Your order is Booked')
                    event.target.reset();
                }
            })
    }

    return (
        <div className='w-50 mx-auto mt-4'>
            <h1>Place Order: {services.name}</h1>
            <form onSubmit={handleToSubmit}>
                <input className='w-100 mb-2' type="text" name="name" value={user?.displayName} placeholder='Name' readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" name="email" value={user?.email} placeholder='Email' readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" name="service" value={services.name} placeholder='Service Name' readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" name="address" placeholder='Address' autoComplete='off' />
                <br />
                <input className='w-100 mb-2' type="text" name="phone" placeholder='Phone' />
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default CheckOut;