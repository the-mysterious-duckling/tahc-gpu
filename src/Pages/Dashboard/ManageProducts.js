import React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const ManageProducts = () => {
    const { data: parts, isLoading, refetch } = useQuery('parts', () => fetch('http://localhost:1000/parts', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    const handleDelete = (part) => {
        fetch(`http://localhost:1000/parts/${part._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`Deleted ${part.name} from Database`)
                    refetch()
                }
            })
    }
    return (
        <div>
            <h2 className='text-2xl text-black bg-gray-200 rounded-b-lg
            h-10 mb-4 flex justify-center items-center'>All Products</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parts.map(
                                (part, index) =>
                                    <tr>
                                        <th>{index + 1}</th>
                                        <td>
                                            <img width={60} src={part.img} alt="gpu" />
                                        </td>
                                        <td>{part.name}</td>
                                        <td><button onClick={() => handleDelete(part)} className='btn btn-xs'>Delete</button></td>
                                    </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;