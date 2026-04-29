import React from 'react';
import { MdEventAvailable } from 'react-icons/md';
import { Link } from 'react-router';

const PopularToys = ({ toys }) => {
    // const id = toyId;
    // console.log(toyId)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5'>

            {
                toys.map(toy => <div
                    key={toy.toyId}
                    className='max-w-87.5 mx-auto bg-white h-107.5 p-2 rounded-2xl hover:scale-105 transition ease-in-out shadow-lg'>
                    <img className='w-83.75 h-83.75 object-cover p-3 rounded-2xl' src={toy.pictureURL} alt="" />
                    <h3 className='font-semibold text-center p-1'>{toy.toyName}</h3>
                    <div className='flex justify-between text-center items-center'>
                        <button className='btn text-[#00D390]'>
                            <MdEventAvailable />{toy.availableQuantity}</button>
                        <Link to={`/toyDetails/${toy.toyId}`}>
                            <button className="bg-[#FFD93D] px-2 py-1 rounded-lg mt-3">
                                View More
                            </button>
                        </Link>
                        <button className='btn text-[#FF8811]'>$ {toy.price}</button>
                    </div>
                </div>)
            }


        </div>
    );
};

export default PopularToys;