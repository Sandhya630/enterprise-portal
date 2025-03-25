"use client"

import React, { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';

const Footer = () => {
    return (
        <>
            <section className='footerSection w-full bg-[#FEF8E5]'>
                <div className='footerHead'>
                    {/* <Image src={"images/footer-top-border.png"} alt='Footer Border'  /> */}
                    <Image src="/images/footer-top-border.png" alt="India Emblem" style={{ width: "100%" }} width={1920} height={0} />
                    
                    <div className="bg-[#FDF7E5] py-3">
                        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-3">
                            {/* Left Section - QR Code and App Buttons */}
                            <div className="flex gap-4 items-end text-center md:text-left">
                                <Image src="/images/qr-code.svg" alt="QR Code" width={120} height={120} className="" />
                                <div className=''>
                                    <p className="text-[#EC2027] uppercase text-sm">Scan the QR</p>
                                    <p className="text-gray-700 text-base">Download Our App for Instant Access</p>
                                    <div className="flex gap-2 mt-2">
                                        <Image className='cursor-pointer' src="/images/app-store.svg" alt="App Store" width={130} height={40} />
                                        <Image className='cursor-pointer' src="/images/google-play.svg" alt="Google Play" width={130} height={40} />
                                    </div>
                                </div>
                            </div>

                            {/* Right Section - Social Media Links */}
                            <div className="flex flex-col items-end mt-6 md:mt-0">
                                <p className="text-gray-700 text-lg mb-2">Stay Connected with India Post</p>
                                <div className="flex gap-3 text-xl text-gray-600">
                                    <div className='cursor-pointer'>
                                        <svg width="35" height="35" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect y="0.40332" width="40" height="40" rx="20" fill="#3C5997"/>
                                            <path d="M17.0462 14.2683V17.0163H15.0322V20.3763H17.0462V30.3623H21.1802V20.3773H23.9552C23.9552 20.3773 24.2152 18.7663 24.3412 17.0043H21.1972V14.7063C21.1972 14.3633 21.6472 13.9013 22.0932 13.9013H24.3472V10.4033H21.2832C16.9432 10.4033 17.0462 13.7663 17.0462 14.2683Z" fill="white"/>
                                        </svg>
                                    </div>
                                    <div className='cursor-pointer'>
                                        <svg width="35" height="35" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 20.4033C0 9.35763 8.95431 0.40332 20 0.40332C31.0457 0.40332 40 9.35763 40 20.4033C40 31.449 31.0457 40.4033 20 40.4033C8.95431 40.4033 0 31.449 0 20.4033Z" fill="#010101"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1096 10.9481C10.2806 10.6137 10.6245 10.4033 11 10.4033H16C16.3211 10.4033 16.6227 10.5575 16.8107 10.8178L21.5748 17.4143L28.2929 10.6962C28.6834 10.3057 29.3166 10.3057 29.7071 10.6962C30.0976 11.0867 30.0976 11.7199 29.7071 12.1104L22.7609 19.0566L29.8107 28.8178C30.0306 29.1222 30.0613 29.5242 29.8904 29.8586C29.7194 30.1929 29.3755 30.4033 29 30.4033H24C23.6789 30.4033 23.3773 30.2491 23.1893 29.9888L18.4252 23.3923L11.7071 30.1104C11.3166 30.5009 10.6834 30.5009 10.2929 30.1104C9.90237 29.7199 9.90237 29.0867 10.2929 28.6962L17.2391 21.75L10.1893 11.9888C9.96946 11.6844 9.93868 11.2824 10.1096 10.9481Z" fill="white"/>
                                        </svg>
                                    </div>
                                    <div className='cursor-pointer'>
                                        <svg width="35" height="35" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 20.4033C0 9.35763 8.95431 0.40332 20 0.40332C31.0457 0.40332 40 9.35763 40 20.4033C40 31.449 31.0457 40.4033 20 40.4033C8.95431 40.4033 0 31.449 0 20.4033Z" fill="#0073B5"/>
                                            <path d="M13 17.4033H12.5C11.5572 17.4033 11.0858 17.4033 10.7929 17.6962C10.5 17.9891 10.5 18.4605 10.5 19.4033V27.9033C10.5 28.8461 10.5 29.3175 10.7929 29.6104C11.0858 29.9033 11.5572 29.9033 12.5 29.9033H13C13.9428 29.9033 14.4142 29.9033 14.7071 29.6104C15 29.3175 15 28.8461 15 27.9033V19.4033C15 18.4605 15 17.9891 14.7071 17.6962C14.4142 17.4033 13.9428 17.4033 13 17.4033Z" fill="white"/>
                                            <path d="M15 13.1533C15 14.396 13.9926 15.4033 12.75 15.4033C11.5074 15.4033 10.5 14.396 10.5 13.1533C10.5 11.9107 11.5074 10.9033 12.75 10.9033C13.9926 10.9033 15 11.9107 15 13.1533Z" fill="white"/>
                                            <path d="M19.826 17.4033H19C18.0572 17.4033 17.5858 17.4033 17.2929 17.6962C17 17.9891 17 18.4605 17 19.4033V27.9033C17 28.8461 17 29.3175 17.2929 29.6104C17.5858 29.9033 18.0572 29.9033 19 29.9033H19.5C20.4428 29.9033 20.9142 29.9033 21.2071 29.6104C21.5 29.3175 21.5 28.8461 21.5 27.9033L21.5001 24.4034C21.5001 22.7466 22.0281 21.4034 23.5879 21.4034C24.3677 21.4034 25 22.075 25 22.9034V27.4034C25 28.3462 25 28.8176 25.2929 29.1105C25.5857 29.4034 26.0572 29.4034 27 29.4034H27.4987C28.4413 29.4034 28.9126 29.4034 29.2055 29.1106C29.4984 28.8178 29.4985 28.3465 29.4987 27.4039L29.5001 21.9035C29.5001 19.4183 27.1364 17.4036 24.7968 17.4036C23.4649 17.4036 22.2767 18.0564 21.5001 19.0773C21.5 18.4472 21.5 18.1323 21.3632 17.8983C21.2765 17.7502 21.1531 17.6269 21.005 17.5402C20.7711 17.4033 20.4561 17.4033 19.826 17.4033Z" fill="white"/>
                                        </svg>
                                    </div>
                                    <div className='cursor-pointer'>
                                        <svg width="35" height="35" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 20.4033C0 9.35763 8.95431 0.40332 20 0.40332C31.0457 0.40332 40 9.35763 40 20.4033C40 31.449 31.0457 40.4033 20 40.4033C8.95431 40.4033 0 31.449 0 20.4033Z" fill="#C8232C"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20 11.6533C17.5263 11.6533 15.173 11.8129 13.0475 12.101C10.7848 12.4076 9.25 14.3957 9.25 16.602V24.2046C9.25 26.4109 10.7848 28.399 13.0475 28.7056C15.173 28.9937 17.5263 29.1533 20 29.1533C22.4737 29.1533 24.827 28.9937 26.9525 28.7056C29.2152 28.399 30.75 26.4109 30.75 24.2046V16.602C30.75 14.3957 29.2152 12.4076 26.9525 12.101C24.827 11.8129 22.4737 11.6533 20 11.6533ZM18.3859 16.7602C18.1542 16.6212 17.8656 16.6175 17.6305 16.7507C17.3953 16.8838 17.25 17.1331 17.25 17.4033V23.4033C17.25 23.6735 17.3953 23.9228 17.6305 24.0559C17.8656 24.1891 18.1542 24.1854 18.3859 24.0464L23.3859 21.0464C23.6118 20.9109 23.75 20.6667 23.75 20.4033C23.75 20.1399 23.6118 19.8957 23.3859 19.7602L18.3859 16.7602Z" fill="white"/>
                                        </svg>
                                    </div>
                                    <div className='cursor-pointer'>
                                        <svg width="35" height="35" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 20.4033C0 9.35763 8.95431 0.40332 20 0.40332C31.0457 0.40332 40 9.35763 40 20.4033C40 31.449 31.0457 40.4033 20 40.4033C8.95431 40.4033 0 31.449 0 20.4033Z" fill="url(#paint0_linear_3331_6759)"/>
                                            <path d="M24.017 10.4033H15.947C14.3702 10.4052 12.8584 11.0325 11.7435 12.1476C10.6286 13.2627 10.0016 14.7745 10 16.3513L10 24.4213C10.0019 25.9982 10.6291 27.5099 11.7442 28.6248C12.8593 29.7397 14.3712 30.3667 15.948 30.3683H24.018C25.5948 30.3665 27.1066 29.7392 28.2215 28.6241C29.3364 27.509 29.9634 25.9972 29.965 24.4203V16.3503C29.9631 14.7735 29.3359 13.2618 28.2208 12.1468C27.1057 11.0319 25.5938 10.4049 24.017 10.4033V10.4033ZM27.957 24.4203C27.957 24.9377 27.8551 25.4501 27.6571 25.9281C27.4591 26.4061 27.1689 26.8405 26.803 27.2063C26.4371 27.5722 26.0028 27.8624 25.5248 28.0604C25.0468 28.2584 24.5344 28.3603 24.017 28.3603H15.947C14.9022 28.3601 13.9003 27.9448 13.1616 27.206C12.423 26.4671 12.008 25.4651 12.008 24.4203V16.3503C12.0083 15.3055 12.4235 14.3036 13.1624 13.565C13.9012 12.8263 14.9032 12.4113 15.948 12.4113H24.018C25.0628 12.4116 26.0647 12.8268 26.8034 13.5657C27.542 14.3045 27.957 15.3065 27.957 16.3513V24.4213V24.4203Z" fill="white"/>
                                            <path d="M19.9823 15.2227C18.6137 15.2248 17.3018 15.7694 16.3342 16.7373C15.3666 17.7051 14.8222 19.0171 14.8203 20.3857C14.8219 21.7546 15.3663 23.067 16.3342 24.035C17.3021 25.0031 18.6144 25.5478 19.9833 25.5497C21.3524 25.5481 22.665 25.0035 23.6331 24.0354C24.6012 23.0673 25.1457 21.7547 25.1473 20.3857C25.1452 19.0167 24.6003 17.7045 23.632 16.7369C22.6637 15.7692 21.3512 15.225 19.9823 15.2237V15.2227ZM19.9823 23.5417C19.1456 23.5417 18.3431 23.2093 17.7514 22.6176C17.1597 22.0259 16.8273 21.2234 16.8273 20.3867C16.8273 19.5499 17.1597 18.7474 17.7514 18.1557C18.3431 17.5641 19.1456 17.2317 19.9823 17.2317C20.8191 17.2317 21.6216 17.5641 22.2132 18.1557C22.8049 18.7474 23.1373 19.5499 23.1373 20.3867C23.1373 21.2234 22.8049 22.0259 22.2132 22.6176C21.6216 23.2093 20.8191 23.5417 19.9823 23.5417Z" fill="white"/>
                                            <path d="M25.1559 16.4984C25.8391 16.4984 26.3929 15.9446 26.3929 15.2614C26.3929 14.5782 25.8391 14.0244 25.1559 14.0244C24.4728 14.0244 23.9189 14.5782 23.9189 15.2614C23.9189 15.9446 24.4728 16.4984 25.1559 16.4984Z" fill="white"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_3331_6759" x1="20" y1="0.40332" x2="20" y2="40.4033" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#CE1B93"/>
                                            <stop offset="0.5" stop-color="#E7366F"/>
                                            <stop offset="1" stop-color="#FAB52C"/>
                                            </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='footerBody bg-[#282424]'>
                    <div className="container mx-auto p-3 py-4">
                        <div className="flex flex-col md:flex-row justify-between gap-3 pb-3">
                            <div className=''>
                                <h6 className='text-[#FFDD00] fw-bold'>Easy Access</h6>
                                <div className='flex flex-col gap-1 pt-2'>
                                    <Link href="" className="">
                                        Home
                                    </Link>
                                    <Link href="" className="">
                                        Sitemap
                                    </Link>
                                    <Link href="" className="">
                                        Recruitments
                                    </Link>
                                    <Link href="" className="">
                                        Right to Information
                                    </Link>
                                    <Link href="" className="">
                                        Feedback
                                    </Link>
                                    <Link href="" className="">
                                        Holidays
                                    </Link>
                                    <Link href="" className="">
                                        Website Policies
                                    </Link>
                                    <Link href="" className="">
                                        Tenders
                                    </Link>
                                    <Link href="" className="">
                                        Performance Dashboard
                                    </Link>
                                </div>
                            </div>
                            <div className=''>
                                <h6 className='text-[#FFDD00] fw-bold'>Dop links</h6>
                                <div className='flex flex-col gap-1 pt-2'>
                                    <Link href="" className="">
                                        Grievance Management
                                    </Link>
                                    <Link href="" className="">
                                        Partner Login
                                    </Link>
                                    <Link href="" className="">
                                        IPPB
                                    </Link>
                                    <Link href="" className="">
                                        Netbanking
                                    </Link>
                                    <Link href="" className="">
                                        Dak Ghar Niyat Portal
                                    </Link>
                                    <Link href="" className="">
                                        Buy Stamps
                                    </Link>
                                    <Link href="" className="">
                                        Other Links
                                    </Link>
                                    <Link href="" className="">
                                        Forms
                                    </Link>
                                    <Link href="" className="">
                                        DOP Mobile Applications
                                    </Link>
                                </div>
                            </div>
                            <div className=''>
                                <h6 className='text-[#FFDD00] fw-bold'>Employee Corner</h6>
                                <div className='flex flex-col gap-1 pt-2'>
                                    <Link href="" className="">
                                        Internal Portal
                                    </Link>
                                    <Link href="" className="">
                                        Self Service Portal
                                    </Link>
                                    <Link href="" className="">
                                        Dak Karmayogi Portal
                                    </Link>
                                    <Link href="" className="">
                                        Circle PTC Website List
                                    </Link>
                                    <Link href="" className="">
                                        Forms
                                    </Link>
                                </div>
                            </div>
                            <div className=''>
                                <h6 className='text-[#FFDD00] fw-bold'>External Links</h6>
                                <div className='flex flex-col gap-1 pt-2'>
                                    <Link href="" className="">
                                        The National Portal of India
                                    </Link>
                                    <Link href="" className="">
                                        National Voters Service Portal
                                    </Link>
                                    <Link href="" className="">
                                        India Code
                                    </Link>
                                    <Link href="" className="">
                                        Application Security Audit Report
                                    </Link>
                                </div>
                            </div>
                            <div className='updatesSection'>
                                <div className='bg-[#FFFFFF08] p-2 px-3 rounded-md flex flex-col gap-1 items-center justify-center'>
                                    <svg width="35" height="30" viewBox="0 0 48 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect y="0.40332" width="48" height="32" rx="16" fill="#FDF4F6" fill-opacity="0.2"/>
                                        <path d="M16.25 11.4033C16.25 8.77997 18.3767 6.65332 21 6.65332C23.6234 6.65332 25.75 8.77997 25.75 11.4033C25.75 14.0267 23.6234 16.1533 21 16.1533C18.3767 16.1533 16.25 14.0267 16.25 11.4033Z" fill="#FAF8E1"/>
                                        <path d="M13.25 23.4033C13.25 20.2277 15.8244 17.6533 19 17.6533H23C26.1756 17.6533 28.75 20.2277 28.75 23.4033C28.75 24.9221 27.5188 26.1533 26 26.1533H16C14.4812 26.1533 13.25 24.9221 13.25 23.4033Z" fill="#FAF8E1"/>
                                        <path d="M25.374 15.8677C25.8812 16.0525 26.4288 16.1533 27 16.1533C29.6233 16.1533 31.75 14.0267 31.75 11.4033C31.75 8.77997 29.6233 6.65332 27 6.65332C26.4288 6.65332 25.8812 6.75413 25.374 6.93892C26.5317 8.07332 27.25 9.65443 27.25 11.4033C27.25 13.1522 26.5317 14.7333 25.374 15.8677Z" fill="#FAF8E1"/>
                                        <path d="M29.24 26.1533H31.9995C33.5183 26.1533 34.7495 24.9221 34.7495 23.4033C34.7495 20.2277 32.1752 17.6533 28.9995 17.6533H27.416C29.1391 18.9787 30.2495 21.0613 30.2495 23.4033C30.2495 24.4521 29.8697 25.4121 29.24 26.1533Z" fill="#FAF8E1"/>
                                    </svg>
                                    <p className='text-[#FFDD00] font-semibold text-lg tracking-widest m-0 leading-none mt-2'>472929</p>
                                    <p className='m-0 font-light'>NO. OF VISITORS</p>
                                </div>
                                <div className='bg-[#FFFFFF08] p-2 px-3 rounded-md flex flex-col gap-1 mt-2 items-center justify-center'>
                                    <p className='m-0 font-light'>Last reviewed and updated on</p>
                                    <p className='m-0 font-bold'>November 1, 2024</p>
                                </div>
                            </div>
                        </div>

                        <div className='footer__copyright border-[#91919166] border-t-1 p-4 relative'>
                            <p className='text-center font-light'>This website belongs to <b className='font-bold'>Department of Posts, Ministry of Communications, GoI.</b> <a href='' className="text-blue-400 hover:underline">Developed by CEPT Copyright Department of Posts</a>.</p>
                            <p className='text-center font-light mt-2'>Content owned and updated by Department of Posts, Ministry of Communications, Government of India.</p>

                            <div className='footerChat_icon absolute'>
                                <Image className='cursor-pointer' src="/images/chatIcon.svg" alt='Chat Icon' width={80} height={80} />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;