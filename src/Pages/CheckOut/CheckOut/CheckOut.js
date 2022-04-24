import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetails from '../../../hooks/useServiceDetails';

const CheckOut = () => {
    const { serviceId } = useParams();
    const [services] = useServiceDetails(serviceId)

    return (
        <div>
            <h1>Proceed Service Details: {services.name}</h1>
        </div>
    );
};

export default CheckOut;