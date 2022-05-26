import React from 'react';
import bgImg from '../../assets/images/ezgi.gif'
import { FaBeer } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const BusinessSummary = () => {
    const navigate = useNavigate()
    const handleBtn = (e) => {
        e.preventDefault()
        navigate('/portfolio')
    }
    return (
        <div class="hero my-10" style={{
            background: `url(${bgImg})`
        }}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold text-white">Wholesale</h1>
                    <p class="mb-5 text-gray-100">We served 200+ customers</p>
                    <p class="mb-5 text-gray-100">We have 20 users</p>
                    <p class="mb-5 text-gray-100">120M+ Annual revenue </p>
                    <p class="mb-5 text-gray-100">MIT licensed </p>
                    <button onClick={handleBtn}
                        className='btn btn-outline btn-primary'>
                        <h3 className='flex text-white'> Lets go for a <FaBeer className='ml-1' /> ? </h3>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;