"use client"
import { useState } from "react";
import Image from "next/image";

export function QuickUpdates () {

const [activeTab, setActiveTab] = useState("Quickupdates");
const [inputValue, setInputValue] = useState("");

    return (
        <>
            <div className="flex gap-2 shadow-[0px_4px_5px_-4px_#1F0C0C33]">
                <button className={`px-4 py-2 font-semibold cursor-pointer ${
                    activeTab === "Quickupdates" ? "text-[#C62829] border-0 border-b active" : "text-[#191919] border-0 border-b border-[transparent]" }`} 
                    onClick={() => setActiveTab("Quickupdates")}>
                    News & updates
                </button>
                <button  className={`px-4 py-2 font-semibold cursor-pointer ${
                    activeTab === "tenders" ? "text-[#C62829] border-0 border-b active" : "text-[#191919] border-0 border-b border-[transparent]" }`} 
                    onClick={() => setActiveTab("tenders")}>
                    Tenders
                </button>
                <button  className={`px-4 py-2 font-semibold cursor-pointer ${
                    activeTab === "notifications" ? "text-[#C62829] border-0 border-b active" : "text-[#191919] border-0 border-b border-[transparent]" }`} 
                    onClick={() => setActiveTab("notifications")}>
                    Notifications
                </button>
                <button  className={`px-4 py-2 font-semibold cursor-pointer ${
                    activeTab === "recruitment" ? "text-[#C62829] border-0 border-b active" : "text-[#191919] border-0 border-b border-[transparent]" }`} 
                    onClick={() => setActiveTab("recruitment")}>
                    Recruitment
                </button>
            </div>
            <div className="flex gap-2 mt-2 bg-white">
                <div className="updatesList flex flex-col gap-2 w-full">
                    <div className="border-0 border-b border-b-[#D7D7D7] p-2 pb-7 flex gap-4">
                        <div className="w-1/6">
                            <div className="bg-[#F6F6F6] p-2 py-3 pb-6 rounded flex flex-col items-center justify-center relative">
                                <p className="text-[#C62829] text-[1.2rem] leading-[1.2]">25</p>
                                <p className="text-[#C62829] text-[1.2rem] leading-[1] ">Sep</p>
                                <span className="px-4 py-1 rounded bg-[#C62829] text-[#FFDD00] absolute bottom-[-1rem] text-[0.875rem]">New</span>
                            </div>
                        </div>
                        <div className="w-5/6">
                            <div className="">
                                <p className="text-black text-[1rem] font-[500] leading-[1.2]">Universal Postal Union International Letter Writing Competition for Young People 2024</p>
                                <div className="mt-2 flex gap-2 items-center">
                                    <Image src="/images/pngicon.svg" width={20} height={20} alt="PNG" />
                                    <p className="text-black text-[1rem] font-normal">[16737 KB]</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-0 border-b border-b-[#D7D7D7] p-2 pb-7 flex gap-4">
                        <div className="w-1/6">
                            <div className="bg-[#F6F6F6] p-2 py-3 pb-6 rounded flex flex-col items-center justify-center relative">
                                <p className="text-[#C62829] text-[1.2rem] leading-[1.2]">13</p>
                                <p className="text-[#C62829] text-[1.2rem] leading-[1] ">Sep</p>
                                <span className="px-4 py-1 rounded bg-[#C62829] text-[#FFDD00] absolute bottom-[-1rem] text-[0.875rem]">New</span>
                            </div>
                        </div>
                        <div className="w-5/6">
                            <div className="">
                                <p className="text-black text-[1rem] font-[500] leading-[1.2]">Dhai Akhar National Level Letter Writing Competition 2024-25</p>
                                <div className="mt-2 flex gap-2 items-center">
                                    <Image src="/images/pngicon.svg" width={20} height={20} alt="PNG" />
                                    <p className="text-black text-[1rem] font-normal">[1362 KB]</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-0 border-b border-b-[#D7D7D7] p-2 pb-7 flex gap-4">
                        <div className="w-1/6">
                            <div className="bg-[#F6F6F6] p-2 py-3 pb-6 rounded flex flex-col items-center justify-center relative">
                                <p className="text-[#C62829] text-[1.2rem] leading-[1.2]">12</p>
                                <p className="text-[#C62829] text-[1.2rem] leading-[1] ">Aug</p>
                                <span className="px-4 py-1 rounded bg-[#C62829] text-[#FFDD00] absolute bottom-[-1rem] text-[0.875rem]">New</span>
                            </div>
                        </div>
                        <div className="w-5/6">
                            <div className="">
                                <p className="text-black text-[1rem] font-[500] leading-[1.2]">Three-month campaign (l6th August, 2024 to 15th November, 2024) on Preventive Vigilance - as a Prelude to Vigilance Awareness Week 2024</p>
                                <div className="mt-2 flex gap-2 items-center">
                                    <Image src="/images/pngicon.svg" width={20} height={20} alt="PNG" />
                                    <p className="text-black text-[1rem] font-normal">[223 KB]</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-0 border-b border-b-[#D7D7D7] p-2 pb-7 flex gap-4">
                        <div className="w-1/6">
                            <div className="bg-[#F6F6F6] p-2 py-3 pb-6 rounded flex flex-col items-center justify-center relative">
                                <p className="text-[#C62829] text-[1.2rem] leading-[1.2]">12</p>
                                <p className="text-[#C62829] text-[1.2rem] leading-[1] ">Aug</p>
                                <span className="px-4 py-1 rounded bg-[#C62829] text-[#FFDD00] absolute bottom-[-1rem] text-[0.875rem]">New</span>
                            </div>
                        </div>
                        <div className="w-5/6">
                            <div className="">
                                <p className="text-black text-[1rem] font-[500] leading-[1.2]">Three-month campaign (l6th August, 2024 to 15th November, 2024) on Preventive Vigilance - as a Prelude to Vigilance Awareness Week 2024</p>
                                <div className="mt-2 flex gap-2 items-center">
                                    <Image src="/images/pngicon.svg" width={20} height={20} alt="PNG" />
                                    <p className="text-black text-[1rem] font-normal">[223 KB]</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-0 border-b border-b-[#D7D7D7] p-2 pb-7 flex gap-4">
                        <div className="w-1/6">
                            <div className="bg-[#F6F6F6] p-2 py-3 pb-6 rounded flex flex-col items-center justify-center relative">
                                <p className="text-[#C62829] text-[1.2rem] leading-[1.2]">12</p>
                                <p className="text-[#C62829] text-[1.2rem] leading-[1] ">Aug</p>
                                <span className="px-4 py-1 rounded bg-[#C62829] text-[#FFDD00] absolute bottom-[-1rem] text-[0.875rem]">New</span>
                            </div>
                        </div>
                        <div className="w-5/6">
                            <div className="">
                                <p className="text-black text-[1rem] font-[500] leading-[1.2]">Three-month campaign (l6th August, 2024 to 15th November, 2024) on Preventive Vigilance - as a Prelude to Vigilance Awareness Week 2024</p>
                                <div className="mt-2 flex gap-2 items-center">
                                    <Image src="/images/pngicon.svg" width={20} height={20} alt="PNG" />
                                    <p className="text-black text-[1rem] font-normal">[223 KB]</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

};