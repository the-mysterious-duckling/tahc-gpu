import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Part from './Part';

const Parts = () => {
    const { data: parts, isLoading } = useQuery('parts', () => fetch('http://localhost:1000/parts').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    // const [parts, setParts] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:1000/parts')
    //         .then(res => res.json())
    //         .then(data => setParts(data))
    // }, [])

    return (
        <div className='px-12'>
            <h1 className='text-center text-4xl my-8 text-accent'>Available components</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-8'>
                {
                    parts.map(part => <Part key={part._id} part={part}></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;