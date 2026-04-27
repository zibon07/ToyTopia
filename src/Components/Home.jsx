import React from 'react';
import Slider from './Slider';
import { useLoaderData } from 'react-router';
import PopularToys from './PopularToys';

const Home = () => {
    const toys = useLoaderData();
    console.log(toys)
    return (
        <div>
            <section className="slider-section ">
                <div className='mt-5'>
                    <Slider toys={toys}></Slider>
                </div>
            </section>
            <section className='popular toys section'>
                <h1 className='text-center text-[#FFD93D] mt-4 text-4xl font-bold'>Popular Toys</h1>
                <PopularToys toys={toys}></PopularToys>
            </section>
        </div>
    );
};

export default Home;