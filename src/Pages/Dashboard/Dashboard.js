import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../CustomHooks/useAdmin';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />
            <div className="drawer-content flex flex-col">
                <h1 className='text-gray-900 text-2xl my-4 text-center'>Hello, {user.displayName}</h1>
                <h1 className='text-gray-900 text-3xl my-4 text-center'>Welcome to your Dashboard</h1>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                {
                    admin ?
                        <ul className="menu p-4 overflow-y-auto w-80 bg-gray-100 text-base-content">
                            <li><Link to='/dashboard'>My Profile</Link></li>
                            <li><Link to='/dashboard/allusers'>Manage Users</Link></li>
                            <li><Link to='/dashboard/addproduct'>Add product</Link></li>
                            <li><Link to='/dashboard/manageproduct'>Manage products</Link></li>
                        </ul>
                        :
                        <ul className="menu p-4 overflow-y-auto w-80 bg-gray-100 text-base-content">
                            <li><Link to='/dashboard'>My Profile</Link></li>
                            <li><Link to='/dashboard/orders'>My Orders</Link></li>
                            <li><Link to='/dashboard/reviews'>Review</Link></li>
                        </ul>
                }
            </div>
        </div>
    );
};

export default Dashboard;
