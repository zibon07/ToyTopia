import React from 'react';
import { useParams } from 'react-router';

const ToyDetails = () => {
    const { id } = useParams();
    // console.log(id)

    return (
        <div className="min-h-screen py-12 px-6 bg-[#00BFA5]">

            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">

                {/* Top Section: Image + Info */}
                <div className="flex flex-col lg:flex-row">

                    {/* Image */}
                    <div className="lg:w-1/2 bg-gray-50 flex items-center justify-center p-8">
                        <img
                            src="toy.pictureURL"
                            alt="toy.toyName"
                            className="w-full max-h-80 object-contain rounded-xl"
                        />
                    </div>

                    {/* Info */}
                    <div className="lg:w-1/2 p-8 flex flex-col justify-center gap-4">

                        {/* Category Badge */}
                        <span className="self-start bg-[#FFD93D] text-gray-800 text-xs font-bold px-3 py-1 rounded-full">
                            toy.subCategory
                        </span>

                        {/* Name */}
                        <h1 className="text-3xl font-bold text-gray-800">toy.toyName</h1>

                        {/* Rating */}
                        <div className="flex items-center gap-2">
                            <span className="text-yellow-400 text-xl">⭐</span>
                            <span className="font-semibold text-gray-700">toy.rating</span>
                            <span className="text-gray-400 text-sm">/ 5.0</span>
                        </div>

                        {/* Price */}
                        <p className="text-4xl font-bold" style={{ color: '#00BFA5' }}>
                            $ toy.price
                        </p>

                        {/* Availability */}
                        <p className="text-sm text-gray-500">
                            🟢 <span className="font-semibold text-gray-700">toy.availableQuantity items</span> in stock
                        </p>

                        {/* Button */}
                        <button className="mt-2 bg-[#FFD93D] text-gray-800 font-bold py-3 px-8 rounded-full shadow hover:scale-105 transition-all duration-200 self-start">
                            Add to Cart 🛒
                        </button>

                    </div>
                </div>

                {/* Divider */}
                <hr className="mx-8 border-gray-100" />

                {/* Bottom Section: Description + Seller */}
                <div className="flex flex-col lg:flex-row gap-6 p-8">

                    {/* Description */}
                    <div className="lg:w-2/3">
                        <h2 className="text-lg font-bold text-gray-800 mb-2">📦 Product Description</h2>
                        <p className="text-gray-500 leading-relaxed">description</p>
                    </div>

                    {/* Seller Info */}
                    <div className="lg:w-1/3 bg-gray-50 rounded-xl p-5">
                        <h2 className="text-lg font-bold text-gray-800 mb-3">🏪 Seller Info</h2>
                        <p className="text-sm text-gray-600 mb-1">
                            <span className="font-semibold">Name:</span> toy.sellerName
                        </p>
                        <p className="text-sm text-gray-600">
                            <span className="font-semibold">Email:</span> toy.sellerEmail
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-1">🎮 Try Now</h2>
                        <p className="text-gray-400 text-sm mb-6">Interested in this toy? Send us a message!</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col lg:flex-row gap-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#00BFA5] transition-all"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#00BFA5] transition-all"
                            />
                        </div>
                        <textarea
                            name="message"
                            placeholder="Write your message..."
                            rows={4}
                            className="border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#00BFA5] transition-all resize-none"
                        />
                        <button
                            className="self-start bg-[#FFD93D] text-gray-800 font-bold py-3 px-8 rounded-full shadow hover:scale-105 transition-all duration-200"
                        >
                            Try Now 🚀
                        </button>
                    </div>
                </div>
            </div>


        </div>


    );
};

export default ToyDetails;