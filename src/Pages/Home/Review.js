import React from 'react';

const Review = ({ booking }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p className='text-center mb-2 text-xl font-bold'>{booking.item}</p>
                <div className='flex items-center'>
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-5">
                            <img src={booking?.userImg} alt='userImage' />
                        </div>
                        <div >
                            <h1 className='text-xl'>{booking.userName}</h1>
                            <h1 className='text-2xl'>Rating: {booking.userRating}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;