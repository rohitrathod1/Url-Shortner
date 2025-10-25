"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className='bg-gray-800 text-white shadow-xl'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          
          <div className="font-extrabold text-2xl text-purple-400 transition duration-300 hover:text-purple-300"> 
            <Link href="/">BitLinks</Link>
          </div>
          
          <ul className='hidden md:flex justify-center items-center gap-6'>
            <Link href="/" passHref>
              <li className="text-gray-300 hover:text-purple-400 transition duration-300 cursor-pointer">Home</li>
            </Link>
            <Link href="/about" passHref>
              <li className="text-gray-300 hover:text-purple-400 transition duration-300 cursor-pointer">About</li>
            </Link>
            <Link href="/shorten" passHref>
              <li className="text-gray-300 hover:text-purple-400 transition duration-300 cursor-pointer">Shorten</li>
            </Link>
            <Link href="/contact" passHref>
              <li className="text-gray-300 hover:text-purple-400 transition duration-300 cursor-pointer">Contact Us</li>
            </Link>
          </ul>
          
          <div className='hidden md:flex gap-3 items-center'>
            <Link href="/shorten">
              <button 
                className='bg-purple-600 rounded-lg shadow-md px-4 py-1 font-bold text-white transition duration-300 hover:bg-purple-700 hover:shadow-lg'
              >
                Try Now
              </button>
            </Link>
            <Link href="/github">
              <button 
                className='bg-gray-700 rounded-lg shadow-md px-4 py-1 font-bold text-white transition duration-300 hover:bg-gray-600 hover:shadow-lg'
              >
                GitHub
              </button>
            </Link>
          </div>

          <div className='flex md:hidden items-center'>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition duration-200'
            >
              <svg className={`h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100 py-2' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
          <Link href="/" passHref>
            <li className="list-none block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 w-full text-center" onClick={() => setIsMenuOpen(false)}>Home</li>
          </Link>
          <Link href="/about" passHref>
            <li className="list-none block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 w-full text-center" onClick={() => setIsMenuOpen(false)}>About</li>
          </Link>
          <Link href="/shorten" passHref>
            <li className="list-none block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 w-full text-center" onClick={() => setIsMenuOpen(false)}>Shorten</li>
          </Link>
          <Link href="/contact" passHref>
            <li className="list-none block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 w-full text-center" onClick={() => setIsMenuOpen(false)}>Contact Us</li>
          </Link>
          
          <div className='flex flex-col gap-3 mt-4 w-full p-2'>
            <Link href="/shorten">
              <button 
                className='w-full bg-purple-600 rounded-lg shadow-md px-4 py-2 font-bold text-white transition duration-300 hover:bg-purple-700'
                onClick={() => setIsMenuOpen(false)}
              >
                Try Now
              </button>
            </Link>
            <Link href="/github">
              <button 
                className='w-full bg-gray-700 rounded-lg shadow-md px-4 py-2 font-bold text-white transition duration-300 hover:bg-gray-600'
                onClick={() => setIsMenuOpen(false)}
              >
                GitHub
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;