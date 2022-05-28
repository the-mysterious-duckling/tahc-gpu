import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const PurchasePage = () => {
    const [user] = useAuthState(auth);

    const [btnDisabler, setBtnDisabler] = useState(true);

    const { id } = useParams();

    const { data: product, isLoading } = useQuery('product', () => fetch(`https://tahc-server-v-01.herokuapp.com/parts/${id}`).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    const { minimumOrderQuantity, inStock } = product

    const handleSubmit = (data) => {
        data.preventDefault()
        const quantity = parseInt(data.target.quantity.value)
        if (parseInt(inStock) < quantity || parseInt(minimumOrderQuantity) > quantity) {
            toast.error('Invalid Quantity')
            return
        }
        if (data.target.phone.value.length !== 11) {
            toast.error(`${data.target.phone.value} is invalid, number must be 11 digits!`)
            return
        }
        const booking = {
            user: data.target.name.value,
            email: data.target.email.value,
            phone: data.target.phone.value,
            address: data.target.address.value,
            quantity: quantity,
            itemName: product.name,
        }
        fetch('https://tahc-server-v-01.herokuapp.com/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Booking Placed Successfully')
                }
            })
    }
    return (
        <>
            <div>
                <h3 className='text-lg text-right text-accent mr-4'>You are requesting as:</h3>
                <p className='text-right text-accent mr-2'>{user.displayName}</p>
                <p className='text-right text-accent mr-2'>{user.email}</p>
            </div>
            <h1 className='text-3xl text-center mr-5'>Requesting for : {product.name}</h1>
            <div className='flex gap-8 mx-8 my-4'>
                <div class="card w-1/2 bg-base-100 shadow-xl mx-auto">
                    <figure class="px-10 pt-10">
                        <img src={product.img} alt='gpu' class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Price: ${product.price}</h2>
                        <p>{product.description}</p>
                    </div>
                </div>
                <div class="card w-1/2 bg-base-100 shadow-xl mx-auto p-8">
                    <h3 className="font-bold text-center text-xl">Your details</h3>
                    <form className='grid grid-cols-1 gap-4 mt-2 justify-items-center' onSubmit={handleSubmit}>
                        {/* Item */}
                        <input type="text" readOnly value={product.name} className="input input-bordered w-full max-w-xs" />
                        {/* Name */}
                        <input type="text" name='name' readOnly value={user?.displayName || ""} placeholder="Your name" className="input input-bordered w-full max-w-xs" />
                        {/* Email */}
                        <input type="email" name='email' readOnly value={user?.email || ""} placeholder="Your email" className="input input-bordered w-full max-w-xs" />
                        {/* Number */}
                        <input required type="number" name='phone' placeholder="Your phone number (Must be Eleven Digits)" className="input input-bordered w-full max-w-xs" />
                        {/* Quantity */}
                        <input required type="number" name='quantity' placeholder={`Item Quantity. (Minimum:${minimumOrderQuantity}, Maximum:${inStock})`} className="input input-bordered w-full max-w-xs" />
                        {/* Address */}
                        <input required type="text" name='address' placeholder="Your address" className="input input-bordered w-full max-w-xs" />
                        {/* Submit */}
                        <input type="submit" placeholder="Submit" className="input input-bordered w-full max-w-xs btn btn-primary text-violet-300 font-bold bg-gradient-to-r from-neutral to-neutral" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default PurchasePage;