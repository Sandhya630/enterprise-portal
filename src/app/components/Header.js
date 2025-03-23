// src/components/Header.js
"use client"

import React, { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';

const Header = () => {
const [languageOpen, setLanguageOpen] = useState(false);
  
    return (
      <header className="w-full">
        {/* Top red banner */}
        <div className="text-white py-2 px-4 flex justify-between items-center topHeader">
          <div className="flex items-center gap-3">
            <Image src="./images/india-flag.svg" alt="Indian Flag" width={32} height={24} />
            <span className="font-semi  bold">GOVERNMENT OF INDIA</span>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="#main" className="text-sm hover:underline">Skip to Main Content</a>
            
            <button className="text-black p-1 rounded border border-white">
                <svg width="18" height="18" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4941 14.4941C14.8195 14.1686 15.3471 14.1686 15.6726 14.4941L19.4226 18.2441C19.748 18.5695 19.748 19.0971 19.4226 19.4226C19.0971 19.748 18.5695 19.748 18.2441 19.4226L14.4941 15.6726C14.1686 15.3471 14.1686 14.8195 14.4941 14.4941Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.33301 9.66683C1.33301 5.06445 5.06397 1.3335 9.66634 1.3335C14.2687 1.3335 17.9997 5.06445 17.9997 9.66683C17.9997 14.2692 14.2687 18.0002 9.66634 18.0002C5.06397 18.0002 1.33301 14.2692 1.33301 9.66683ZM9.66634 3.00016C5.98444 3.00016 2.99967 5.98493 2.99967 9.66683C2.99967 13.3487 5.98444 16.3335 9.66634 16.3335C13.3483 16.3335 16.333 13.3487 16.333 9.66683C16.333 5.98493 13.3483 3.00016 9.66634 3.00016Z" fill="white"/>
                </svg>
            </button>
            
            <div className="relative">
              <button 
                className="flex items-center gap-1 bg-white text-black px-2 py-1 w-48"
                onClick={() => setLanguageOpen(!languageOpen)}
              >
                {/* <Image src="/language-icon.png" alt="Language" width={16} height={16} /> */}
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8359 13.3497H13.1556L13.6424 12.1131H15.8342L16.3376 13.3557H17.6738L15.2552 7.69922H14.2772L11.8359 13.3497ZM15.423 11.055H14.0626L14.7397 9.27584L15.423 11.055Z" fill="#C62829"/>
                    <path d="M5.58201 4.19894H6.23414V5.97003C6.08063 6.04746 5.91043 6.08594 5.73855 6.08206C5.54698 6.07888 5.35981 6.0238 5.19705 5.92262C5.122 5.85735 5.03901 5.80184 4.94998 5.75742C5.24596 5.4723 5.40722 5.07508 5.39385 4.66432C5.39385 3.76082 4.81929 3.15465 3.95744 3.15465C3.42941 3.14694 2.93709 3.42047 2.66468 3.8729L2.62446 3.94042L3.32542 4.72324L3.39579 4.58821C3.43932 4.48127 3.51357 4.38962 3.60924 4.32496C3.70486 4.26025 3.81754 4.22541 3.93299 4.2248C4.21022 4.2248 4.38403 4.42876 4.38403 4.75625C4.38403 4.99327 4.30935 5.39113 3.80946 5.39113L3.46186 5.39118V6.45988H3.96176C4.38263 6.45988 4.59524 6.64948 4.59524 7.02438C4.59524 7.33178 4.44009 7.65926 4.00632 7.65926C3.50643 7.65926 3.23355 7.22834 3.16173 7.0847L3.08991 6.95256L2.3501 7.78995L2.39461 7.85747C2.74488 8.40604 3.35114 8.73764 4.00195 8.73653C4.94422 8.73653 5.60642 8.04563 5.6294 7.04875C5.82634 7.11683 6.03942 7.12286 6.23987 7.066V9.15454H7.29852L7.29847 4.19894H8.31116V9.15454H9.36981V4.19894H10.1828L10.1828 3.19345H5.58198L5.58201 4.19894Z" fill="#C62829"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.908 11.3H2.188V13.116C2.188 13.276 2.284 13.424 2.436 13.484C2.484 13.504 2.536 13.516 2.588 13.516C2.692 13.516 2.796 13.476 2.872 13.4L4.968 11.304H8.8V13.424C8.8 14.364 9.564 15.128 10.504 15.128H15.632L17.428 16.924C17.504 17 17.608 17.04 17.712 17.04C17.764 17.04 17.816 17.032 17.864 17.008C18.012 16.948 18.112 16.8 18.112 16.64V15.128H18.296C19.236 15.128 20 14.364 20 13.424V7.78397C20 6.84397 19.236 6.07997 18.296 6.07997H12.84V2.86797C12.84 1.81597 11.984 0.959975 10.932 0.959975H1.908C0.856 0.955975 0 1.81197 0 2.86397V9.39197C0 10.444 0.856 11.3 1.908 11.3ZM18.296 6.87598C18.796 6.87598 19.2 7.27997 19.2 7.77997V13.42C19.2 13.92 18.796 14.324 18.296 14.324H17.712C17.492 14.324 17.312 14.504 17.312 14.724V15.672L16.08 14.44C16.004 14.364 15.904 14.324 15.796 14.324H10.504C10.004 14.324 9.6 13.92 9.6 13.42V11.3H10.932C11.984 11.3 12.84 10.444 12.84 9.39197V6.87598H18.296ZM0.8 2.86397C0.8 2.25197 1.296 1.75597 1.908 1.75597H10.928C11.54 1.75597 12.036 2.25197 12.036 2.86397V9.39197C12.036 10.004 11.54 10.5 10.928 10.5H4.8C4.692 10.5 4.592 10.544 4.516 10.616L2.984 12.148V10.9C2.984 10.68 2.804 10.5 2.584 10.5H1.904C1.296 10.5 0.8 10.004 0.8 9.39197V2.86397Z" fill="#C62829"/>
                </svg>

                <span>English</span>
                <svg className='ml-auto' width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.50126 7.896L0.00251266 0.103942L9 0.103943L4.50126 7.896Z" fill="#B81D30"/>
                </svg>
              </button>
              
              {languageOpen && (
                <div className="absolute right-0 w-48 bg-white border rounded-bottom shadow-lg z-10">
                  <ul>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black">English</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black">हिंदी</li>
                  </ul>
                </div>
              )}
            </div>
            
            <div className="flex gap-2">
              <button className="cursor-pointer text-white text-sm border border-white px-1 rounded w-8 h-8">A-</button>
              <button className="cursor-pointer text-white text-sm border border-white px-1 rounded w-8 h-8">A</button>
              <button className="cursor-pointer text-white text-sm border border-white px-1 rounded w-8 h-8">A+</button>
              <div className='d-flex border-black border rounded'>
                <button className="cursor-pointer text-black bg-white text-sm px-1 rounded-s w-8 h-8">A</button>
                <button className="cursor-pointer bg-black text-white text-sm px-1 rounded-e w-8 h-8">A</button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main navigation */}
        <div className="bg-white py-2 px-4 border-b flex justify-between items-center headerNavigator">
          <div className="flex items-center gap-3">
            <Image src="images/india-emblem.svg" alt="India Emblem" width={30} height={40} />
            <div className="flex flex-col">
              <Image src="images/india-post-logo.svg" alt="India Post Logo" width={100} height={40} />
            </div>
          </div>
          
          <nav className="hidden md:flex">
            <ul className="flex text-gray-800">
              {['About Us', 'Quick Links', 'Mail Services', 'Banking Services', 'Insurance Services', 'Online Services', 'Grievance Management'].map((item) => (
                <li key={item} className="relative group">
                  <a href="#" className="block px-3 py-2 hover:text-red-700 transition-colors">
                    <span className="flex items-center">
                      {item}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </a>
                  <div className="absolute hidden group-hover:block bg-white shadow-lg z-10 min-w-[200px]">
                    <div className="p-4">
                      <ul>
                        <li className="py-1 hover:text-red-700">Submenu Item 1</li>
                        <li className="py-1 hover:text-red-700">Submenu Item 2</li>
                        <li className="py-1 hover:text-red-700">Submenu Item 3</li>
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="flex gap-2">
            <Link href="/login" className="bg-red-700 text-white px-4 py-1.5 rounded flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Partner Login
            </Link>
            <Link href="/register" className="border border-gray-400 text-gray-700 px-4 py-1.5 rounded flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Registration
            </Link>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;