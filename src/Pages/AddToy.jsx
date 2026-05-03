import React from 'react';

const AddToy = () => {
    return (
        <div className="bg-[#00BFA5] min-h-screen py-12 px-6">
            <title>ToyTopia - Add Toy</title>
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">

                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">🧸 Add New Toy</h2>
                    <p className="text-gray-400 text-sm mt-1">Fill in the details to list your toy</p>
                </div>

                <div className="flex flex-col gap-5">

                    <input type="text" placeholder="Toy Name" className="border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none" />
                    <input type="text" placeholder="Picture URL" className="border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none" />

                    <div className="flex flex-col sm:flex-row gap-4">
                        <input type="text" placeholder="Seller Name" className="border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none flex-1" />
                        <input type="email" placeholder="Seller Email" className="border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none flex-1" />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <input type="number" placeholder="Price ($)" className="border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none flex-1" />
                        <input type="number" placeholder="Rating (0-5)" className="border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none flex-1" />
                        <input type="number" placeholder="Quantity" className="border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none flex-1" />
                    </div>

                    <select className="border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none text-gray-400">
                        <option value="">Select Sub Category</option>
                        <option>Building Blocks</option>
                        <option>RC Cars</option>
                        <option>Soft Toys</option>
                        <option>Train Sets</option>
                        <option>Dolls</option>
                        <option>Sports Toys</option>
                        <option>Puzzles</option>
                        <option>Pretend Play</option>
                        <option>Action Figures</option>
                        <option>Musical Toys</option>
                        <option>Animal Toys</option>
                    </select>

                    <textarea placeholder="Description..." rows={4} className="border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none resize-none" />

                    <button className="w-full bg-[#FFD93D] text-gray-800 font-bold py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-200">
                        + Add Toy 🧸
                    </button>

                </div>
            </div>
        </div>
    );
};

export default AddToy;