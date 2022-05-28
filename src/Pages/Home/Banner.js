import React from 'react';
import banner from '../../assets/images/banner.webp'

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-gray-100 px-28">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} alt='banner' className="lg:max-w-2xl rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Welcome to Tahc</h1>
                    <p className="py-6 text-4xl">We manufacture and wholesale graphics processing units</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;