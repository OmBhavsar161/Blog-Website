import logo from '../imgs/logo.png';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
    const [searchBoxVisibility, setSearchBoxVisibility] = useState(false);

    return (
        <>
        <nav className="bg-grey text- w-full shadow-md fixed top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">

                {/* Left Side - Logo and Write */}
                <div className="flex items-center space-x-8"> {/* Added more space between logo and write */}
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img src={logo} alt="logo" className="h-8 w-auto" />
                    </Link>

                    {/* Editor Link */}
                    {/* Write Link */}
        <Link to="/editor" className="flex items-center space-x-1 text-gray-500 hover:text-indigo-600">
          <i className="text-xl">✍️</i>
          <p className="hidden md:block">Write</p>
        </Link>

                    {/* Search Bar */}
                    <div className={`relative w-56 hidden sm:block`}>
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full p-2 pr-10 bg-gray-100 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <i className="fas fa-search absolute right-3 top-2.5 text-gray-500"></i>
                    </div>
                </div>

                {/* Right Side - Sign In and Sign Up */}
                <div className="flex items-center space-x-4">
                    {/* Sign In */}
                    {/* Sign In Button */}
        <Link
          to="/signin"
          className="px-4 py-1 border border-gray-400 rounded-full hover:bg-gray-100 transition-colors"
        >
          Sign In
        </Link>

        {/* Sign Up Button */}
        <Link
          to="/signup"
          className="px-4 py-1 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
        >
          Sign Up
        </Link>
                </div>

                {/* Toggle Search for Mobile */}
                <button
                    className="sm:hidden bg-gray-200 p-2 rounded-lg text-gray-700 hover:bg-gray-300 focus:outline-none"
                    onClick={() => setSearchBoxVisibility(currentVal => !currentVal)}
                >
                    <i className="fas fa-search"></i>
                </button>

                {/* Search Bar for Mobile */}
                {searchBoxVisibility && (
                    <div className="absolute top-16 left-0 w-full bg-white p-4 shadow-md">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full p-2 pr-10 bg-gray-100 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <i className="fas fa-search absolute right-3 top-2.5 text-gray-500"></i>
                        </div>
                    </div>
                )}
            </div>
        </nav>
        <div className="mt-16"> {/* Added margin to prevent content overlap with the navbar */}
                <Outlet />
            </div>
        </>
    );
}
