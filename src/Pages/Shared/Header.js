import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth)
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }
    const navigate = useNavigate()
    const headerItems = <>
        <li><Link to='home'>Home</Link></li>
        <li><Link to='blogs'>Blogs</Link></li>
        <li><Link to='portfolio'>Portfolio</Link></li>
        <li>{user ?
            <button onClick={logout} className='btn btn-primary'>Logout</button>
            :
            <Link to='/login'>Login</Link>}</li>
    </>
    return (
        <div className="navbar bg-primary">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {headerItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl"><img src={logo} alt="logo" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {headerItems}
                </ul>
            </div>
            {
                user ?
                    <div className="navbar-end">
                        <button onClick={() => navigate('/dashboard')} className="btn">Dashboard</button>
                    </div> :
                    <div className="navbar-end">
                    </div>
            }
        </div>
    );
};

export default Header;