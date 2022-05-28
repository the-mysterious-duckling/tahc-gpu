import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { FaSkullCrossbones, FaPaypal } from 'react-icons/fa';
import DeleteConfirmationModal from './DeleteConfirmationModal';
import Dashboard from './Dashboard';
import toast from 'react-hot-toast';
import { signOut } from 'firebase/auth';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const { email } = user;
    const navigate = useNavigate();

    const [bookingDelete, setBookingDelete] = useState(null);

    const { data: bookings, isLoading, refetch } = useQuery('bookings', () =>
        fetch(`http://localhost:1000/bookings/${email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => {
            if (res.status == 401 || res.status == 403) {
                toast.error('Access Rejected, Please Log in again');
                navigate('/');
                localStorage.removeItem('accessToken');
                signOut(auth)
            };
            return res.json();
        })
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>User</th>
                            <th>Email</th>
                            <th>Item</th>
                            <th>Status</th>
                            <th>Payment</th>
                            <th>Terminate Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((b, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{b.name}</td>
                                    <td>{b.email}</td>
                                    <td>{b.itemName}</td>
                                    <td>Unpaid</td>
                                    <td>
                                        <Link to={`/dashboard/pay/${b._id}`}><button className='btn btn-info'><FaPaypal /> <span className='ml-2'>Pay</span></button></Link></td>
                                    <td><label onClick={() => setBookingDelete(b)} for="delete-confirmation-modal" class="btn btn-error"><FaSkullCrossbones /> <span className='ml-2'>Cancel</span></label></td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                bookingDelete && <DeleteConfirmationModal
                    bookingDelete={bookingDelete}
                    setBookingDelete={setBookingDelete}
                    refetch={refetch}
                ></DeleteConfirmationModal>
            }
        </div>
    );
};

export default MyOrders;