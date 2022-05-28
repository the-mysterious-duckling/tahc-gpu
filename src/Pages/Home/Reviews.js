import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Review from './Review';
import { FaPaperclip } from 'react-icons/fa';

const Reviews = () => {
    const { data: reviews, isLoading } = useQuery('review', () => fetch('https://tahc-server-v-01.herokuapp.com/reviews').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='my-20'>
            <div className='flex justify-between'>
                <div className='mx-auto my-4'>
                    <h4 className="text-3xl text-accent font-bold flex"><span className='mr-2'>Product Rating By Users</span> <FaPaperclip></FaPaperclip></h4>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {reviews.map(review => <Review key={review._id} booking={review}></Review>)}
            </div>
        </div>
    );
};

export default Reviews;