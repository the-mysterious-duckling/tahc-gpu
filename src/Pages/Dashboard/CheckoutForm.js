import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = ({ booking }) => {
    // just a hook
    const stripe = useStripe();
    // the credentials and other inputted info in card data
    const elements = useElements();
    // error handling
    const [cardError, setCardError] = useState('');
    const [cardSuccess, setCardSuccess] = useState('');
    // get client secret
    const [clientSecret, setClientSecret] = useState('');
    const { price } = booking

    useEffect(() => {
        fetch('https://tahc-server-v-01.herokuapp.com/payment-create-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            })
    }, [price])

    const handleSubmit = async (e) => {
        e.preventDefault()
        // If no data found just return
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        // If no card data found
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        // error handling
        setCardSuccess('')
        error ? setCardError(error.message) : setCardError('')

        // confirm payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: booking.patientName,
                        email: booking.patientEmail
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError?.message)
        }
        else {
            setCardError('')
            console.log(paymentIntent)
            setCardSuccess('Your payment is completed')
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-secondary mt-4 btn-sm' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                cardSuccess && <p className='text-green-500'>{cardSuccess}</p>
            }
        </>
    );
};

export default CheckoutForm;