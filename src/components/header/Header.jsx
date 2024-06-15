import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="w-100 h-screen bg-cover bg-[url('.\..\src\assets\img-bg.png')]">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        ></div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-54">
          <div className="text-center">
            <h1 className="flex justify-center text-9x1 font-bold tracking-tight text-white sm:text-6xl">
              Creatorverse
            </h1>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/show-creators"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                View All Creators
              </Link>
              <Link
                to="/add-creator"
                className="text-sm font-semibold leading-6 text-gray-100 transform transition-transform hover:scale-110"
              >
                Add a Creator <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
