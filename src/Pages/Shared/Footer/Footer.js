import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

    return (
        <div>
            <p className='text-center m-5'>{date} Copyright &copy; www.mehedihasn.com</p>
        </div>
    );
};

export default Footer;