import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyReviews = () => {
    const [user] = useAuthState(auth);

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    // React query to load all the services name
    const { data: parts, isLoading } = useQuery('parts', () => fetch('http://localhost:1000/parts').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    const onSubmit = async (data) => {
        const reviewData = {
            userName: user?.displayName,
            userEmail: user?.email,
            userRating: data.rating,
            item: data.item
        }
        console.log(reviewData)
        /* fetch('http://localhost:1000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Booking Placed Successfully')
                }
            }) */
        fetch('http://localhost:1000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success(`Thank you for your review ${data.name}`)
                    reset()
                }
                else {
                    toast.error('Failed to add your review')
                }
            })
    }
    return (
        <div>
            <h2 className='text-2xl mx-12'>Add a Review</h2>
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Name */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is a required field'
                                },
                            })} />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.name.message}</span>}
                        </label>
                    </div>
                    {/* Rating */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Rating</span>
                        </label>
                        <select className="select w-full max-w-xs" {...register("rating")} >
                            <option>1 star</option>
                            <option>2 star</option>
                            <option>3 star</option>
                            <option>4 star</option>
                            <option>5 star</option>
                        </select>
                    </div>
                    {/* Part */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Graphics Processing Unit</span>
                        </label>
                        <select {...register("item")} className="select w-full max-w-xs">
                            {
                                parts.map(part =>
                                    <option key={part._id}
                                    >{part.name}</option>
                                )
                            }
                        </select>
                    </div>
                    <br></br>
                    <input className='btn w-full max-w-xs mt-4' type="submit" value="Add Review" />
                </form>
            </div >
        </div >
    );
};

export default MyReviews;