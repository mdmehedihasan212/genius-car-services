import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetails from '../../../hooks/useServiceDetails';

const CheckOut = () => {
    const { serviceId } = useParams();
    const [services] = useServiceDetails(serviceId)
    const [user, setUser] = useState({
        name: 'Md Mehedi Hasan',
        email: 'mdmehedihasan384@gmail.com',
        address: 'Rupatali Arafat Housing, Barishal',
        phone: '017'
    });

    const handlePhoneChange = event => {
        console.log(event.target.value);
        const { phone, ...rest } = user;
        const newPhone = event.target.value;
        const newUser = { phone: newPhone, ...rest };
        setUser(newUser);
        console.log(newUser);
    }

    return (
        <div className='w-50 mx-auto mt-4'>
            <h1>Place Order: {services.name}</h1>
            <form>
                <input className='w-100 mb-2' type="text" name="name" value={user.name} placeholder='Name' />
                <br />
                <input className='w-100 mb-2' type="text" name="email" value={user.email} placeholder='Email' />
                <br />
                <input className='w-100 mb-2' type="text" name="service" value={services.name} placeholder='Service Name' />
                <br />
                <input className='w-100 mb-2' type="text" name="address" value={user.address} placeholder='Address' />
                <br />
                <input onChange={handlePhoneChange} className='w-100 mb-2' type="text" name="phone" value={user.phone} placeholder='Phone' />
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default CheckOut;