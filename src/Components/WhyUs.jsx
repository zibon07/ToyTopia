import React from 'react';

const WhyUs = () => {
    return (
        <div className='bg-[00BFA5]'>
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white">Why Buy From Us?</h2>
                <p className="text-white/75 mt-2 text-base max-w-xl mx-auto">
                    ToyTopia is the most trusted toy store for thousands of happy families.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">

                <div className="bg-white rounded-xl shadow-md p-6 text-center hover:scale-105 transition-all duration-200 hover:bg-[#FFD93D]">
                    <span className="text-5xl">🚚</span>
                    <h3 className="text-lg font-bold text-gray-800 mt-4">Fast Delivery</h3>
                    <p className="text-gray-500 text-sm mt-2">Get your toys delivered to your doorstep within 2-3 business days.</p>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6 text-center hover:scale-105 transition-all duration-200 hover:bg-[#FFD93D]">
                    <span className="text-5xl">✅</span>
                    <h3 className="text-lg font-bold text-gray-800 mt-4">Quality Assured</h3>
                    <p className="text-gray-500 text-sm mt-2">Every toy is safety tested and certified for children of all ages.</p>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6 text-center hover:scale-105 transition-all duration-200 hover:bg-[#FFD93D]">
                    <span className="text-5xl">💰</span>
                    <h3 className="text-lg font-bold text-gray-800 mt-4">Best Prices</h3>
                    <p className="text-gray-500 text-sm mt-2">We offer competitive prices with regular discounts and deals.</p>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6 text-center hover:scale-105 transition-all duration-200 hover:bg-[#FFD93D]">
                    <span className="text-5xl">🔄</span>
                    <h3 className="text-lg font-bold text-gray-800 mt-4">Easy Returns</h3>
                    <p className="text-gray-500 text-sm mt-2">Not satisfied? Return within 7 days — no questions asked.</p>
                </div>

            </div>
            <div className="mt-12 bg-[#FFD93D] rounded-2xl p-8 max-w-3xl mx-auto text-center shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800">🎁 New Arrivals Every Week!</h3>
                <p className="text-gray-700 mt-2">Join thousands of happy parents shopping at ToyTopia.</p>
                <button className="mt-5 bg-white text-gray-800 font-bold px-8 py-3 rounded-full shadow hover:scale-105 transition-all duration-200">
                    Shop Now →
                </button>
            </div>
        </div>
    );
};

export default WhyUs;