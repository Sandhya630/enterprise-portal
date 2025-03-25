
"use client"
import { useState } from "react";

export default function TrackandTrace () {
    const [activeTab, setActiveTab] = useState("consignment");
    const [inputValue, setInputValue] = useState("");


      // Define input placeholders based on selected tab
    // const getPlaceholder = () => {
    //     switch (activeTab) {
    //     case "refNo":
    //         return "Enter Reference Number";
    //     case "complaintId":
    //         return "Enter Complaint ID";
    //     default:
    //         return "Enter Consignment ID";
    //     }
    // };

    return (
        <>
            <div className="bg-[#F8F6F6] p-3">
                <p className="flex items-center gap-2 text-lg font-semibold text-[#D02A2B]">
                    <span className="inline-block">
                        <svg width="23" height="23" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M29.1824 9.31428L29.1838 9.31363L25.874 2.88839C25.1964 1.53326 23.8113 0.677246 22.2962 0.677246H7.69869C6.18361 0.677246 4.79855 1.53326 4.12098 2.88839L0.778822 9.38308L0.780355 9.38384C0.708555 9.5218 0.667969 9.6786 0.667969 9.84488V25.5771C0.667969 27.6022 2.30959 29.2438 4.33463 29.2438L20.1149 29.3445C19.4946 28.5409 18.3901 27.3791 17.6784 26.7485C15.7924 25.0771 14.668 22.9706 14.668 20.2977C14.668 15.6939 18.3706 11.9105 23.0013 11.9105C25.5462 11.9105 27.8109 13.0533 29.3346 14.8469V9.84488C29.3346 9.64996 29.2789 9.46807 29.1824 9.31428ZM7.69869 3.34391C7.19366 3.34391 6.73198 3.62925 6.50611 4.08095L4.05461 8.84488H13.668V3.34391H7.69869ZM16.3346 8.84488H25.939L23.4889 4.08097C23.263 3.62925 22.8013 3.34391 22.2962 3.34391H16.3346V8.84488ZM12.2461 12.9746C12.2461 12.4223 12.6938 11.9746 13.2461 11.9746H15.9128C16.465 11.9746 16.9128 12.4223 16.9128 12.9746C16.9128 13.5269 16.465 13.9746 15.9128 13.9746H13.2461C12.6938 13.9746 12.2461 13.5269 12.2461 12.9746ZM16.668 20.3982C16.668 16.8802 19.4941 14.0111 23.0013 14.0111C26.5085 14.0111 29.3346 16.8802 29.3346 20.3982C29.3346 22.4234 28.5154 24.0074 26.9978 25.3522C26.1008 26.1471 24.493 27.8898 23.8384 28.8915C23.6506 29.1787 23.3288 29.3497 22.9856 29.3443C22.6425 29.339 22.3261 29.1579 22.1474 28.865C21.5416 27.8711 19.9197 26.163 19.0048 25.3522C17.4872 24.0074 16.668 22.4234 16.668 20.3982ZM20.9922 19.6778C20.9922 18.5733 21.8876 17.6778 22.9922 17.6778H23.0101C24.1148 17.6778 25.0101 18.5733 25.0101 19.6778C25.0101 20.7823 24.1148 21.6778 23.0101 21.6778H22.9922C21.8876 21.6778 20.9922 20.7823 20.9922 19.6778Z" fill="#C62829"/>
                        </svg>
                    </span>
                    Track N Trace
                </p>

                <div className="flex gap-2 mt-4 border-x-0 border-b border-[#C62829]">
                    <button className={`px-4 py-2 font-semibold cursor-pointer ${
                        activeTab === "consignment" ? "text-[#C62829] border rounded-t-md border-b-0 border-[#C62829] active" : "text-[#191919] rounded-t-md border border-b-0 border-[#C628294D]" }`} 
                        onClick={() => setActiveTab("consignment")}>
                        Consignment ID
                    </button>
                    <button  className={`px-4 py-2 font-semibold cursor-pointer ${
                        activeTab === "refNo" ? "text-[#C62829] border rounded-t-md border-b-0 border-[#C62829] active" : "text-[#191919] rounded-t-md border border-b-0 border-[#C628294D]" }`} 
                        onClick={() => setActiveTab("refNo")}>
                        Ref No
                    </button>
                    <button  className={`px-4 py-2 font-semibold cursor-pointer ${
                        activeTab === "complaintId" ? "text-[#C62829] border rounded-t-md border-b-0 border-[#C62829] active" : "text-[#191919] rounded-t-md border border-b-0 border-[#C628294D]" }`} 
                        onClick={() => setActiveTab("complaintId")}>
                        Complaint ID
                    </button>
                </div>

                <div className="flex items-center gap-2 mt-2 bg-white p-3">
                    <input
                    type="text"
                    placeholder="EK123456789IN" value={inputValue} onChange={(e) => setInputValue(e.target.value)}
                    className="border border-[#C1C1C1] text-black rounded-sm p-2 w-full focus:border-[#C62829] focus:outline-none focus:shadow-md focus:shadow-[#E12D2D78]"
                    />
                    <div className="bg-[#FAFAFA] border border-[#D6D6D6] rounded-sm p-2 flex gap-1">
                        <input type="checkbox" className="mr-2" />
                        <span className="whitespace-nowrap font-sm text-black">I'm not a robot</span>
                    </div>
                    <button className="bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-800">Track</button>
                </div>
            </div>
        </>
    );

}