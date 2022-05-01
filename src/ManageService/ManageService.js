import React from 'react';
import useServices from '../hooks/useServices';
import './ManageService.css';
import deleteIcon from '../images/icon/delete.ico';

const ManageService = () => {
    const [services, setServices] = useServices();
    const handleUserDelete = id => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            const url = `https://afternoon-lowlands-28127.herokuapp.com/service/${id}`;
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
        <div className='text-center mt-4'>
            <h1>Manage Service: {services.length}</h1>
            {
                services?.map(service => <div key={service._id}>
                    <div className='manage-service'>
                        <h4>{service.name}</h4>
                        <img onClick={() => handleUserDelete(service._id)} src={deleteIcon} alt="" />
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageService;