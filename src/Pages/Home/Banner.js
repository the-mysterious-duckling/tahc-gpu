import React from 'react';
import banner from '../../assets/images/banner.webp'

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-gray-100 px-28">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} alt='banner' class="lg:max-w-2xl rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Welcome to Tahc</h1>
                    <p class="py-6 text-4xl">We manufacture and wholesale graphics processing units</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;