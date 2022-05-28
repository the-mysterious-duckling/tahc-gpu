import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const AddProduct = () => {
    const [user] = useAuthState(auth);

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    // React query to load all the services name
    const { data: parts, isLoading } = useQuery('parts', () => fetch('https://tahc-server-v-01.herokuapp.com/parts', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    const onSubmit = async (data) => {
        const productData = {
            name: data.name,
            price: parseInt(data.price),
            img: data.imgUrl,
            inStock: parseInt(data.inStock),
            minimumOrderQuantity: parseInt(data.minimumOrderQuantity),
            description: data.description,
        }
        console.log(productData)
        fetch('https://tahc-server-v-01.herokuapp.com/parts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success(`Added ${data.name} to database successfully!`)
                    reset()
                }
                else {
                    toast.error(`Failed to add ${data.name}`)
                }
            })
    }
    return (
        <div className='border rounded-lg shadow-xl mx-auto mt-8 p-10'>
            <h2 className='text-2xl mx-12'>Add a Product</h2>
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Name */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">GPU Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter gpu name"
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
                    {/* Price */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Enter the cost"
                            className="input input-bordered w-full max-w-xs"
                            {...register("price", {
                                required: {
                                    value: true,
                                    message: 'Price is a required field'
                                },
                            })} />
                        <label className="label">
                            {errors.price?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.price.message}</span>}
                        </label>
                    </div>
                    {/* Image Url */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Image Url</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Please use 500x500 img"
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
                    {/* Minimum Order Quantity */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Minimum Order Quantity</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Enter the Minimum Order Quantity"
                            className="input input-bordered w-full max-w-xs"
                            {...register("minimumOrderQuantity", {
                                required: {
                                    value: true,
                                    message: 'Minimum Order Quantity is a required field'
                                },
                            })} />
                        <label className="label">
                            {errors.minimumOrderQuantity?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.minimumOrderQuantity.message}</span>}
                        </label>
                    </div>
                    {/* Stock */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Stock</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Enter the quantity of items in inventory"
                            className="input input-bordered w-full max-w-xs"
                            {...register("inStock", {
                                required: {
                                    value: true,
                                    message: 'Stock is a required field'
                                },
                            })} />
                        <label className="label">
                            {errors.inStock?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.inStock.message}</span>}
                        </label>
                        {/* Name */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">GPU description</span>
                            </label>
                            <textarea
                                type="text"
                                placeholder="Please write around 50 words"
                                className="input input-bordered w-full max-w-xs"
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: 'Description is a required field'
                                    },
                                })} />
                            <label className="label">
                                {errors.description?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.description.message}</span>}
                            </label>
                        </div>
                    </div>
                    <br></br>
                    <input className='btn w-full max-w-xs mt-4' type="submit" value="Add Product" />
                </form>
            </div >
        </div >
    );
};

export default AddProduct;