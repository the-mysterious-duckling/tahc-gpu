import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Review from './Review';

const Reviews = () => {
    const { data: reviews, isLoading } = useQuery('review', () => fetch('http://localhost:1000/reviews').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='my-20'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Testimonials</h4>
                    <h2 className='text-3xl font-bold'>User Feedback</h2>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {reviews.map(review => <Review key={review._id} booking={review}></Review>)}
            </div>
        </div>
    );
};

export default Reviews;