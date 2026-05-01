import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const HomeLayout = () => {

    return (
        <div className='bg-[#00B894] text-[#2D3436] min-h-screen'>
            <header>
                <Navbar></Navbar>
            </header>

            <main>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;