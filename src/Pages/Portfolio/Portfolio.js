import React from 'react';
import myImg from '../../assets/images/gpu-kawaii.gif'
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
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
                <img src={myImg} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Hello, I am Ahnaf Warid</h1>
                    <p class="text-md font-bold my-2">Mail: corp.ahnafwarid@gmail.com</p>
                    <p class="py-6 text-lg">I am currently a full time student doing my CSE degree from Brac University. I have a 4.0 cgpa and all of these projects and github contributions are extra work after my studies.</p>
                    <p class="py-6 text-lg">Tech I use: currently I use React for building the client side of an application. Express, node to build the server</p>
                    <p class="pt-6 text-lg font-bold">Some other projects I made:
                    </p>
                    <div className='flex my-8'>
                        <button onClick={redirectToFruit} class="btn btn-primary mr-2"><span className='mr-1'>FruituMart </span><FaGithub></FaGithub></button><button onClick={redirectToIsha} class="btn btn-primary mr-2"><span className='mr-1'>Isha </span><FaGithub></FaGithub></button><button onClick={redirectToCar} class="btn btn-primary"><span className='mr-1'>Car Selector App </span><FaCar></FaCar></button>
                    </div>
                    <button onClick={redirectToGithub} class="btn"><span className='mr-1'>Check out Github </span><FaGithub></FaGithub></button>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;