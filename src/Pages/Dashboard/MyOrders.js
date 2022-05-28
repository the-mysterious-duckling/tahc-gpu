import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { FaSkullCrossbones, FaPaypal } from 'react-icons/fa';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const { email } = user
    const { data: bookings, isLoading } = useQuery('bookings', () =>
        fetch(`http://localhost:1000/bookings/${email}`).then(res => res.json())
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
                                        <Link to={`/dashboard/pay/${b._id}`}><button className='btn btn-secondary'><FaPaypal /> <span className='ml-2'>Pay</span></button></Link></td>
                                    <td><button className='btn btn-outline'><FaSkullCrossbones /> <span className='ml-2'>Cancel</span></button></td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;