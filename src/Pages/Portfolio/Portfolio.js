import React from 'react';
import myImg from '../../assets/images/ahnaf.jpg'
import { FaGithub, FaCar } from 'react-icons/fa';

const Portfolio = () => {
    const redirectToGithub = () => {
        window.location.replace('https://www.github.com/ahnafwarith')
    }
    const redirectToFruit = () => {
        window.location.replace('https://simple-shopping-app-bd927.web.app')
    }
    const redirectToIsha = () => {
        window.location.replace('https://isha-services.web.app/')
    }
    const redirectToCar = () => {
        window.location.replace('https://car-selector-app-ahnaf-warid.netlify.app/')
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div>
                    <h1 className="text-5xl font-bold">Hello, I am Ahnaf Warid</h1>
                    <p className="text-md font-bold my-2">Mail: corp.ahnafwarid@gmail.com</p>
                    <p className="py-6 text-lg">I am currently doing my CSE degree from Brac University. All of these projects with Programming Hero and github contributions are extra work after completing my studies to further boost my skills.</p>
                    <p className="py-6 text-lg">Tech I use: React to build the client side of an application. Express, node to build the server</p>
                    <p className="pt-6 text-lg font-bold">Some other projects I made:
                    </p>
                    <div className='flex my-8'>
                        <button onClick={redirectToFruit} className="btn btn-primary mr-2"><span className='mr-1'>FruituMart </span><FaGithub></FaGithub></button><button onClick={redirectToIsha} className="btn btn-primary mr-2"><span className='mr-1'>Isha </span><FaGithub></FaGithub></button><button onClick={redirectToCar} className="btn btn-primary"><span className='mr-1'>Car Selector App </span><FaCar></FaCar></button>
                    </div>
                    <button onClick={redirectToGithub} className="btn"><span className='mr-1'>Check out Github </span><FaGithub></FaGithub></button>
                </div>
                <img src={myImg} className="max-w-sm rounded-lg shadow-xl" />
            </div>
        </div>
    );
};

export default Portfolio;