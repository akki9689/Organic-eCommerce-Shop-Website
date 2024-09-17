// src/Newsletter.jsx
import React from 'react';
import logo from '../../../public/Logo.svg'

const Newsletter = () => {
    return (
        <div className="py-8 bg-gray-100">
            <div className="flex flex-col items-center justify-between px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:flex-row">
                {/* Logo Section */}
                <div className="flex items-center mb-6 lg:mb-0">
                    <img src={logo} alt="Ecobazar Logo" className="" />
                    {/* <h1 className="text-2xl font-bold text-gray-900">Ecobazar</h1> */}
                </div>

                {/* Newsletter Section */}
                <div className="flex flex-col items-center lg:flex-row lg:items-start">
                    {/* Text Section */}
                    <div className="mb-4 lg:mb-0 lg:mr-8">
                        <h2 className="text-lg font-semibold text-gray-900">Subscribe to our Newsletter</h2>
                        <p className="text-gray-500">Pellentesque eu nibh eget mauris congue mattis mattis.</p>
                    </div>

                    {/* Input and Button Section */}
                    <div className="flex flex-col items-center w-full sm:flex-row sm:w-auto">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="w-full px-4 py-2 border border-gray-300 rounded-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                        <button className="w-full px-4 py-2 mt-2 text-white bg-gray-900 rounded-full text-white-100 sm:mt-0 sm:ml-2 sm:w-auto hover:bg-gray-700">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
