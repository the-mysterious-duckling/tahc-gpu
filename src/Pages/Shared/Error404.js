import React from 'react';
import errorPage from '../../assets/images/error404.webp'

const Error404 = () => {
    return (
        <div>
            <img className='h-screen mx-auto' src={errorPage} alt="error" />
        </div>
    );
};

export default Error404;