import Image from "next/image";

export function DeliveringEfficiently () {
    return (
        <>
             <div className='flex md:flex-row gap-3'>
                <div className='xl:w-1/4 lg:w-2/5 w-full'>
                    <p className="text-black text-3xl">Delivering Efficiently</p>
                    <div className="deliveringlist flex flex-col gap-3 mt-3">
                        <div className="deliveringBlock border border-[#C62829] p-2 rounded flex items-center justify-between cursor-pointer shadow-[0_3px_11px_-4px_#000000A6]">
                            <div className="flex gap-2 items-center">
                                <Image src="./images/D_icon1.svg" width={40} height={40} alt="Postage Calculator" />
                                <p className="text-[#C62829] font-bold font-md">Postage Calculator</p>
                            </div>
                            <svg className="" width="13" height="15" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.316406 17.6446L7.94974 10.0112L0.316406 2.36123L2.66641 0.0112305L12.6664 10.0112L2.66641 20.0112L0.316406 17.6446Z" fill="#C62829"/>
                            </svg>
                        </div>
                        <div className="deliveringBlock border border-[#C62829] p-2 rounded flex items-center justify-between cursor-pointer shadow-[0_3px_11px_-4px_#000000A6]">
                            <div className="flex gap-2 items-center">
                                <Image src="./images/D_icon2.svg" width={40} height={40} alt="Click N Book" />
                                <p className="text-[#C62829] font-bold font-md">Click N Book</p>
                            </div>
                            <svg className="" width="13" height="15" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.316406 17.6446L7.94974 10.0112L0.316406 2.36123L2.66641 0.0112305L12.6664 10.0112L2.66641 20.0112L0.316406 17.6446Z" fill="#C62829"/>
                            </svg>
                        </div>
                        <div className="deliveringBlock border border-[#C62829] p-2 rounded flex items-center justify-between cursor-pointer shadow-[0_3px_11px_-4px_#000000A6]">
                            <div className="flex gap-2 items-center">
                                <Image src="./images/D_icon3.svg" width={40} height={40} alt="Cash on Delivery" />
                                <p className="text-[#C62829] font-bold font-md">Cash on Delivery</p>
                            </div>
                            <svg className="" width="13" height="15" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.316406 17.6446L7.94974 10.0112L0.316406 2.36123L2.66641 0.0112305L12.6664 10.0112L2.66641 20.0112L0.316406 17.6446Z" fill="#C62829"/>
                            </svg>
                        </div>
                        <div className="deliveringBlock border border-[#C62829] p-2 rounded flex items-center justify-between cursor-pointer shadow-[0_3px_11px_-4px_#000000A6]">
                            <div className="flex gap-2 items-center">
                                <Image src="./images/D_icon4.svg" width={40} height={40} alt="Get India Post Franchise" />
                                <p className="text-[#C62829] font-bold font-md">Get India Post Franchise</p>
                            </div>
                            <svg className="" width="13" height="15" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.316406 17.6446L7.94974 10.0112L0.316406 2.36123L2.66641 0.0112305L12.6664 10.0112L2.66641 20.0112L0.316406 17.6446Z" fill="#C62829"/>
                            </svg>
                        </div>
                        <div className="deliveringBlock border border-[#C62829] p-2 rounded flex items-center justify-between cursor-pointer shadow-[0_3px_11px_-4px_#000000A6]">
                            <div className="flex gap-2 items-center">
                                <Image src="./images/D_icon5.svg" width={40} height={40} alt="Dak Ghar Niyat Kendra" />
                                <p className="text-[#C62829] font-bold font-md">Dak Ghar Niyat Kendra</p>
                            </div>
                            <svg className="" width="13" height="15" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.316406 17.6446L7.94974 10.0112L0.316406 2.36123L2.66641 0.0112305L12.6664 10.0112L2.66641 20.0112L0.316406 17.6446Z" fill="#C62829"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="xl:w-3/4 lg:w-3/5 w-full">
                    <p className="text-black text-3xl">Video Gallery</p>
                    <div className="videoWrapper border border-[#949494] p-2 rounded mt-3 shadow-[0_3px_11px_-4px_#000000A6] flex items-center justify-center">
                        <Image src="/images/videoImg.png" className="w-full" width={100} height={40} alt="Video Preview Image" />
                        <div className="playbtn absolute">
                            <svg className="cursor-pointer" width="36" height="41" viewBox="0 0 36 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M33.6424 16.0562C36.6869 17.814 36.6869 22.2085 33.6424 23.9662L6.92316 39.3926C3.8786 41.1504 0.0728819 38.9531 0.0728821 35.4376L0.0728834 4.5849C0.0728836 1.06933 3.87859 -1.1279 6.92316 0.629885L33.6424 16.0562Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                </div>
             </div>
        </>
    );
}