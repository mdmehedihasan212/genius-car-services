import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;

    const navigate = useNavigate();
    const handleToServiceDetails = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='service-container'>
            <img className='w-100' src={img} alt="img" />
            <h4>{name}</h4>
            <h5>Price: {price}</h5>
            <p>{description}</p>
            <button onClick={() => handleToServiceDetails(id)} className='btn btn-primary'>Booking Now</button>
        </div>
    );
};

export default Service;