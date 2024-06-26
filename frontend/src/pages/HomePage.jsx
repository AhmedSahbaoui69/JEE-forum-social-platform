import React, {useEffect} from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    const token = localStorage.getItem('token');
    if (token) {
        window.location='/feed';
        return null;
    }

    return (
        <div className="duration-300 delay-0 flex flex-col items-center justify-center h-full ">
            <div className="max-w-screen-lg p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Welcome to  <mark
                        className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">Foo(rum);</mark>
                    </h1>
                    <p className="mb-8 text-base sm:text-lg md:text-xl lg:text-xl  dark:text-gray-400">Foorum
                        is a platform where you can share ideas, discuss various topics and connect with like-minded
                        individuals. We believe in the power of community and the potential of collective intelligence.</p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <Link to="/register"
                              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            Join now
                            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </Link>
                        <a href="#"
                           className="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70">
                            Learn more
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;