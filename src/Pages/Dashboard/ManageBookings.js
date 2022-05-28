import React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const ManageBookings = () => {
    const { data: bookings, isLoading, refetch } = useQuery('bookings', () => fetch('https://tahc-server-v-01.herokuapp.com/bookings', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    const handleDelete = (booking) => {
        fetch(`https://tahc-server-v-01.herokuapp.com/deleteidbooking/${booking._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`Deleted ${booking.itemName} Booking from  Database`)
                    refetch()
                }
                else {
                    toast.error('Unauthorized, please try logging in again')
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
                            <th>Quantity</th>
                            <th>Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(
                                (b, index) =>
                                    <tr>
                                        <th>{index + 1}</th>
                                        <td>{b.user}</td>
                                        <td>{b.itemName}</td>
                                        <td>{b.quantity}</td>
                                        <td>
                                            <button onClick={() => handleDelete(b)} className='btn btn-xs'>Delete</button>
                                        </td>
                                    </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageBookings;