import React from 'react';

const Categories = ({ toys }) => {
    // console.log(toys)
    return (
        <div className='flex flex-col lg:flex-row items-center gap-2 px-6 py-4
              rounded-xl shadow-md cursor-pointer
              transition-all duration-200 min-w-27.5 
              '>

            {
                toys.map(toy =>
                    <div key={toy.toyId} className='border-2 border-yellow-500 py-2 rounded-2xl bg-white hover:bg-yellow-500'>
                        <h2 className='text-lg font-semibold'>{toy.subCategory}</h2>
                    </div>)
            }

        </div>
    );
};

export default Categories;