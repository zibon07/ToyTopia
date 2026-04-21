import React, { use } from 'react';
import { Link } from 'react-router';
import MyLink from './MyLink';
import { AuthContext } from '../Provider/AuthProvider';
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';
const Navbar = () => {
    const { user, logOut } = use(AuthContext);
    const handleLogOut = () => {
        // console.log("user trying to logout");
        logOut()
            .then(() => {
                alert('sign Out successful')
            })
            .cath(() => {
                alert('sign Out unsuccessful')
            })

    }
    return (
        <div className="navbar  shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul

                        tabIndex="-1"
                        className="menu  menu-sm dropdown-content bg-[#FFFFFF] rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><MyLink to={'/'}>Home</MyLink></li>
                        <li><MyLink to={'/profile'}>My-Profile</MyLink></li>
                    </ul>
                </div>
                <a className="text-3xl text-[#FFD93D] font-bold">ToyTopia</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu  menu-horizontal px-1">
                    <li><MyLink to={'/'}>Home</MyLink></li>
                    <li><MyLink to={'/profile'}>My-Profile</MyLink></li>

                </ul>
            </div>
            {
                user ?
                    <div className="navbar-end gap-3">
                        <img className='w-10 rounded-full' src="https://i.ibb.co.com/4QsnQX3/user-icon-vector-1272330-86.jpg" alt="profile photo" />
                        <Link><button onClick={handleLogOut} className='btn bg-[#FFD93D]'>LogOut</button></Link>
                    </div>
                    :
                    <div className="navbar-end gap-3">
                        <img className='w-10 rounded-full' src="https://i.ibb.co.com/4QsnQX3/user-icon-vector-1272330-86.jpg" alt="profile photo" />
                        <Link to={'/auth/login'}><button className='btn bg-[#FFD93D]'>login</button></Link>
                    </div>
            }

        </div>
    );
};

export default Navbar;