import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L2IVhIig3HH1x3lu4SW8ZVPAXEXPOnUOVtyC0JKo3D9QJhZ2Shr3dJVFTa8OPegsBOjttiMgbbeGb7OzFjQLYoN00bi64AiMH');

const PaymentPage = () => {
    const { id } = useParams();
    const url = `https://tahc-server-v-01.herokuapp.com/idbookings/${id}`
    const { data: booking, isLoading } = useQuery(['booking', id], () =>
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <p className='text-xl'>Hello, <span className='text-secondary font-bold'>{booking.user}</span></p>
                    <h2 className="card-title">Make payment for {booking.itemName}</h2>
                    <p>Please pay <span className='text-xl text-gray-600 font-bold'>${booking.price}</span></p>
                </div>
            </div>
            <div className="card flex-shrink-0 mt-8 flex justify-center w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm booking={booking} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;