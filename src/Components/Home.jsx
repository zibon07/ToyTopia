import React from 'react';
import Slider from './Slider';
import { useLoaderData } from 'react-router';

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
        </div>
    );
};

export default Home;