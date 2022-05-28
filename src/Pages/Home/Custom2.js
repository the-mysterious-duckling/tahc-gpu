import React from 'react';
import girl from '../../assets/images/gpu-kawaii.gif'
import { FaBeer } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Custom2 = () => {
    const navigate = useNavigate()
    const handleBtn = (e) => {
        e.preventDefault()
        navigate('/portfolio')
    }
    return (
        <div className='py-6'>
            <div className="hero min-h-screen bg-primary">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={girl} className="max-w-screen-sm rounded-lg shadow-2xl" alt='girl' />
                    <div>
                        <h1 className="text-5xl font-bold">About Application</h1>
                        <p className="py-6 text-xl">This is a demo full-stack website for a manufacture-buy-sell gpu single page application. The components are updated with user interaction. Booking for a part can be made, updated, cancelled and many more. All of the parts can be changed as well. The user data can be updated and there are many more features. The front end is build with react and the backend is build with node, express. All of the user credentials are protected by google's security systems: firebase. The API calls are secure with json web token. Two type of access and Dashboard Interface is built for admin to change data stored and normal user to book,buy,review etc.</p>
                        <button onClick={handleBtn}
                            className='btn btn-neutral'>
                            <h3 className='flex text-violet-300'> Lets go for a <FaBeer className='ml-1' /> ? </h3>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Custom2;