import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const Custom1Recently = () => {
    const { data: parts, isLoading } = useQuery('parts', () => fetch('https://tahc-server-v-01.herokuapp.com/parts').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='py-6 px-12'>
            <h1 className='text-2xl text-neutral text-center mb-2'>The latest added GPU</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-8'>
                {
                    parts.slice(-3).map(part => <div className="card w-48 bg-base-100 shadow-xl">
                        <figure><img src={part.img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {part.name}
                                <div className="badge badge-green">NEW!</div>
                            </h2>
                            <p>{part.description.slice(0, 50)} ...</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Stock:</div>
                                <div className="badge badge-outline">{part.inStock} items</div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Custom1Recently;