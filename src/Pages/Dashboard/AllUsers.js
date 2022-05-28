import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import OneUser from './OneUser';

const AllUsers = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:1000/users', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl text-black bg-gray-200 rounded-b-lg
            h-10 mb-4 flex justify-center items-center'>Manage Users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Admin Access</th>
                            <th>Delete User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(
                                (user, index) => <OneUser
                                    key={user._id}
                                    user={user}
                                    index={index}
                                    refetch={refetch}
                                ></OneUser>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;