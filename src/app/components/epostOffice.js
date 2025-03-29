import Image from "next/image";

export function EpostOffice () {
    return(
        <>
            <div className="epostOfficePage">
                <div className="flex items-end justify-between">
                    <div>
                        <p className="text-[#C62829] text-[1rem]">EPOST OFFICE</p>
                        <p className="text-[2rem] text-black">Stamps, Prasadam and more...</p>
                    </div>
                    <button className="bg-red-700 text-white px-8 py-2 rounded-md hover:bg-red-800 cursor-pointer">View All Products</button>
                </div>
                <div className="flex flex-row gap-3 mt-5">
                    <div className="w-1/3">
                        <div className="w-full rounded-xl bg-[url(/images/GANGAJAL.png)] bg-cover h-[19rem] bg-center bg-no-repeat p-5 flex flex-col items-center justify-center">
                            <p className="text-white text-center text-[1.3rem]">Even a single drop of Ganga Jal can wash</p>
                            <p className="text-white text-center text-[1.3rem]">away the burden of lifetimes.</p>
                            <button className="bg-white mt-2 text-[#D91638] font-bold hover:text-white px-8 py-2 rounded-md hover:bg-red-800 cursor-pointer">BUY  GANGAJAL</button>
                        </div>
                    </div>
                    <div className="w-1/3">
                        <div className="w-full rounded-xl bg-[url(/images/buystamps_bg.png)] bg-cover h-[19rem] bg-center bg-no-repeat p-5 flex gap-2 items-center justify-center">
                            <div className="w-2/5">
                                <Image src="/images/buystamps_img.svg" className="w-full" width={100} height={100} />
                            </div>
                            <div className="w-3/5">
                                <p className="text-black text-[1rem]">Buy</p>
                                <p className="text-black text-[1rem]">postage stamps issued on</p>
                                <p className="text-black text-[1.3rem]">Shree Ram Janmbhoomi</p>
                                <button className="bg-white mt-2 text-[#ED6335] font-bold hover:text-white px-8 py-2 rounded-md hover:bg-red-800 cursor-pointer">BUY  GANGAJAL</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3">
                        <div className="w-full rounded-xl bg-[url(/images/aadhar_update.png)] bg-cover h-[19rem] bg-center bg-no-repeat p-5 flex flex-col items-start justify-end relative
                        after:content-[''] after:absolute after:rounded-b-xl after:bottom-[0] after:left-[0] after:bg-linear-[180deg,#193c5700_7.68%,#2A3034_100%] after:block after:w-full after:h-[6rem]">
                            <p className="text-white text-center text-[1.3rem] font-bold p-2 pb-0 z-1">Aadhar Update</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}