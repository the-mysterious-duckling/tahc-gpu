import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import Loading from '../Shared/Loading';

const OneLineChart = () => {
    const { data: parts, isLoading } = useQuery('parts', () => fetch('https://tahc-server-v-01.herokuapp.com/parts').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='mt-5'>
            <h1 className='text-2xl text-neutral text-center mb-2'>Price Comparison Graph of GPU</h1>
            <LineChart height={500} width={650} data={parts}>
                <Line dataKey={'name'}></Line>
                <Line dataKey={'price'} stroke="#82ca9d"></Line>
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip></Tooltip>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
            </LineChart>
        </div >
    );
};

export default OneLineChart;