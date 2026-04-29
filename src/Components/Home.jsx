import React from 'react';
import Slider from './Slider';
import { useLoaderData } from 'react-router';
import PopularToys from './PopularToys';
import Categories from './Categories';
import WhyUs from './WhyUs';

const Home = () => {
    const toys = useLoaderData();
    // console.log(toys)
    return (
        <div className='space-y-10'>
            <section className="slider-section ">
                <div className='mt-5'>
                    <Slider toys={toys}></Slider>
                </div>
            </section>
            <section className='popular toys section'>
                <h1 className='text-center text-white mt-4 text-4xl font-bold'>Popular Toys</h1>
                <PopularToys toys={toys}></PopularToys>
            </section>
            <section className="categories-section">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-white">Shop by Category</h2>
                    <p className="text-white mt-1 text-sm">Explore our wide range of toys</p>
                </div>
                <Categories toys={toys}></Categories>
            </section>
            <section className="Why-Us">
                <WhyUs></WhyUs>
            </section>
        </div>
    );
};

export default Home;