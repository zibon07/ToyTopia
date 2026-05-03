import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='bg-[#00BFA5] min-h-screen flex flex-col items-center justify-center px-6 text-center'>
            <title>Error 404</title>
            <h1 className="text-[10rem] font-black text-white/20 leading-none select-none">
                404
            </h1>
            <div className="text-8xl -mt-10">🧸</div>
            <h2 className="text-3xl font-bold text-white mt-6">
                Oops! Toy Not Found
            </h2>
            <p className="text-white/70 mt-3 max-w-md text-sm leading-relaxed">
                Looks like this toy ran away! The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link to="/">
                    <button className="bg-[#FFD93D] text-gray-800 font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-all duration-200">
                        🏠 Back to Home
                    </button>
                </Link>
                <Link to="/all-toys">
                    <button className="bg-white text-gray-800 font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-all duration-200">
                        🧸 Browse Toys
                    </button>
                </Link>
            </div>

            {/* Bottom fun text */}
            <p className="text-white/40 text-xs mt-16">
                © ToyTopia — Don't worry, we have plenty of other toys! 🎁
            </p>

        </div>


    );
};

export default ErrorPage;