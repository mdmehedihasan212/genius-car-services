import React from 'react';
import useServices from '../hooks/useServices';

const ManageService = () => {
    const [services, setServices] = useServices();
    console.log(services);
    const handleUserDelete = id => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            const url = `http://localhost:5000/service/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(result => {
                    const reaming = services.filter(service => service._id !== id);
                    setServices(reaming);
                    console.log(result);
                })
        }
    }

    return (
        <div className='text-center'>
            <h1>Manage Service</h1>
            {
                services?.map(service => <div key={service._id}>
                    <h4>{service.name} <button onClick={() => handleUserDelete(service._id)}>X</button></h4>
                </div>)
            }
        </div>
    );
};

export default ManageService;