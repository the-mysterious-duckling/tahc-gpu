import React from 'react';
import OneLineChart from './Custom1Chart';
import Custom1Recently from './Custom1Recently';
import { FaBolt } from 'react-icons/fa';

const Custom1 = () => {
  return (
    <section className=' my-24'>
      <h1 className='text-center text-4xl font-bold flex justify-center'><FaBolt className='text-yellow-400'></FaBolt> <span className='text-gray-700 mx-4'>GPU Stats</span> <FaBolt className='text-yellow-400'></FaBolt></h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4'>
        <div><OneLineChart></OneLineChart></div>
        <div><Custom1Recently></Custom1Recently></div>
      </div>
    </section>
  );
};

export default Custom1;