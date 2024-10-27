import logo from '../imgs/logo.png';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
    const [searchBoxVisibility, setSearchBoxVisibility] = useState(false);

    return (
        <>
        <nav className="bg-[#2bd1e7] text-black text-xl font-medium w-full  shadow-md fixed top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">

                {/* Left Side - Logo, Snow, Home, Write, Sign In, Sign Up */}
                <div className="flex items-center space-x-8">
                    {/* Logo and Snow Name */}
                    <Link to="/" className="flex items-center ml-[-50px] mr-[60px]">
                        <img src={logo} alt="logo" className="h-8 w-auto" />
                        <span className="text-3xl text-slate-800 font-bold ml-2">Snow</span> {/* Add "Snow" next to the logo */}
                    </Link>

                    {/* Home Link */}
                    <Link to="/" className="text-black hover:opacity-[60%]">
                        Home
                    </Link>

                    {/* Write Link */}
                    <Link to="/editor" className="text-black hover:opacity-[60%] flex items-center space-x-1">
                        <i className="text-xl">✍️</i>
                        <p>Write</p>
                    </Link>

                    {/* Sign In */}
                    <Link to="/signin" className="text-black hover:opacity-[70%] px-4 py-2 bg-cyan-500 rounded-lg">
                        Sign In
                    </Link>

                    {/* Sign Up */}
                    <Link to="/signup" className="text-gray-900 hover:opacity-[70%] px-4 py-2 bg-cyan-200 rounded-lg">
                        Sign Up
                    </Link>
                </div>

                {/* Right Side - Search Bar */}
                <div className="relative w-56">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full p-2 pr-10 bg-gray-200 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none"
                    />
                    <button className="absolute right-0 top-0 bottom-0 text-white p-2">
                        <i className="fas fa-search"></i>
                    </button>
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
                                className="w-full p-2 pr-10 bg-gray-200 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none"
                            />
                            <button className="absolute right-0 top-0 bottom-0 bg-orange-500 text-white p-2">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
        <div className="mt-16">
            <Outlet />
        </div>
        </>
    );
}
