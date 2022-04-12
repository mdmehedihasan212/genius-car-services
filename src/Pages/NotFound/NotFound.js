import React from 'react';
import notfound from '../../images/notfound.png';

const NotFound = () => {
    return (
        <div className='d-flex justify-content-around align-items-center mt-5'>
            <div>
                <h1>404</h1>
                <h4>Page not found</h4>
            </div>
            <div>
                <img className='w-100' src={notfound} alt="" />
            </div>
        </div>
    );
};

export default NotFound;