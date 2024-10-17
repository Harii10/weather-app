import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

function Error() {
  return (
    <>
      <div className="grid h-screen place-content-center bg-white px-4">
        <div className="text-center">
          <h1 className="text-9xl font-black text-gray-200">Oops!</h1>

          <p className=" mt-8 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Page Not Found
          </p>

          <p className="mt-4 text-gray-500"></p>
        <NavLink to="/weather-app/">
        
        <a
            className="mt-6 inline-block rounded bg-blue-500 px-5 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring"
          >
            Go Back Home
          </a>
        </NavLink>
          
        </div>
      </div>
    </>
  );
}

export default Error;
