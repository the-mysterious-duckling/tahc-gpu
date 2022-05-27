import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const PurchasePage = () => {
    const [user] = useAuthState(auth);
    console.log(user)
    const { id } = useParams();

    const { data: product, isLoading } = useQuery('product', () => fetch(`http://localhost:1000/parts/${id}`).then(res => res.json()))

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <>
            <div className='flex gap-8 mx-8 my-4'>
                <div class="card w-1/2 bg-base-100 shadow-xl mx-auto">
                    <figure class="px-10 pt-10">
                        <img src={product.img} alt='gpu' class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">{product.name}</h2>
                        <p>{product.description}</p>
                    </div>
                </div>
                <div class="card w-1/2 bg-base-100 shadow-xl mx-auto p-8">
                    <form className='grid grid-cols-1 gap-4 mt-2 justify-items-center' onSubmit={handleSubmit}>
                        <input type="text" readOnly value={'x'} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='name' disabled value={user?.displayName || ""} placeholder="Your name" className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email || ""} placeholder="Your email" className="input input-bordered w-full max-w-xs" />
                        <input type="number" name='phone' placeholder="Your number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" placeholder="Submit" className="input input-bordered w-full max-w-xs btn btn-primary text-white font-bold bg-gradient-to-r from-white to-blue-100" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default PurchasePage;