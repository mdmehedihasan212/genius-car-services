import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <div className='service-container'>
            <img className='w-100' src={img} alt="img" />
            <h4>{name}</h4>
            <h5>Price: {price}</h5>
            <p>{description}</p>
            <button className='btn btn-primary'>Booking Now</button>
        </div>
    );
};

export default Service;