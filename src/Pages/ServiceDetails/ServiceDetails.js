import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetails from '../../hooks/useServiceDetails';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [services] = useServiceDetails(serviceId)

    return (
        <div className='text-center mt-4'>
            <h1>Service Details Id: {services.name}</h1>
            <div>
                <Link to={`/checkout/${serviceId}`}>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;