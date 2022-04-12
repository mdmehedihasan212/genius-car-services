import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

    return (
        <div>
            <p className='text-center mt-5'>Copyright &copy; {date}</p>
        </div>
    );
};

export default Footer;