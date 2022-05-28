import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';

const IndexDash = () => {
    const [user] = useAuthState(auth);

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        const userData = {
            education: data.education,
            phone: parseInt(data.phone),
            img: data.imgUrl
        }
        console.log(userData)
        const url = `http://localhost:1000/updateuser/${user.email}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success(`Added to database successfully!`)
                    reset()
                }
                else {
                    toast.error(`Failed to add Please reload and log in again and try`)
                }
            })
    }
    return (
        <div>
            <h1 className='text-xl mr-2 '>Name: {user.displayName}</h1>
            <h1 className='text-xl mr-2 '>Email: {user.email}</h1>
            <div className='border rounded-lg shadow-xl mx-auto mt-8 p-10'>
                <h2 className='text-2xl mx-12'>Add More Info</h2>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Education */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Education Backgroud</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter education details"
                                className="input input-bordered w-full max-w-xs"
                                {...register("education",)} />
                        </div>
                        {/* Phone */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Enter your phone number"
                                className="input input-bordered w-full max-w-xs"
                                {...register("phone", {
                                    required: {
                                        value: true,
                                        message: 'Phone is a required field'
                                    },
                                })} />
                            <label className="label">
                                {errors.phone?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.phone.message}</span>}
                            </label>
                        </div>
                        {/* Image Url */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Image Url</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Add your image with url"
                                className="input input-bordered w-full max-w-xs"
                                {...register("imgUrl", {
                                    required: {
                                        value: true,
                                        message: 'Image Url is a required field'
                                    },
                                })} />
                            <label className="label">
                                {errors.imgUrl?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.imgUrl.message}</span>}
                            </label>
                        </div>
                        <input className='btn w-full max-w-xs mt-4' type="submit" value="Update Profile" />
                    </form>
                </div >
            </div >
        </div>
    );
};

export default IndexDash;