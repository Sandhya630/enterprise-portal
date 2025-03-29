import Image from "next/image";
import { QuickUpdates } from "./quick-updates";

export function ServicesSchemes () {
    return (
        <>
            <div className="flex flex-col md:flex-row gap-5">
                <div className="md:w-3/5 w-full">
                    <div className="flex items-center justify-between">
                        <p className="text-black text-2xl"> Avail Services and Schemes </p>
                        <p className="flex items-center gap-2 text-[#C62829] font-semibold cursor-pointer">View all Schemes
                            <span className="">
                                <svg width="15" height="15" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5944 1.12109L8.39648 0.319009C8.76107 -0.00911561 9.30794 -0.00911561 9.63607 0.319009L16.7454 7.39193C17.0736 7.75651 17.0736 8.30338 16.7454 8.63151L9.63607 15.7409C9.30794 16.069 8.76107 16.069 8.39648 15.7409L7.5944 14.9388C7.26628 14.5742 7.26628 14.0273 7.5944 13.6628L12.0059 9.47005H1.54232C1.0319 9.47005 0.667317 9.10547 0.667317 8.59505V7.42838C0.667317 6.95443 1.0319 6.55338 1.54232 6.55338H12.0059L7.5944 2.39713C7.26628 2.03255 7.22982 1.48568 7.5944 1.12109Z" fill="#C62829"/>
                                </svg>
                            </span>
                        </p>
                    </div>
                    <div className="mt-2">
                        <div className="grid grid-cols-3 gap-3">
                            <div className="serviceBlock rounded-md bg-[#FAFAFA] shadow-[0_4px_4px_0_#00000014] cursor-pointer">
                                <Image src="/images/service1.png" className="w-full" width={100} height={80} alt="Post Office Savings Account (SB)" />
                                <p className="p-2 bg-[#FAFAFA] rounded-md text-[#3C3333] font-semibold">Post Office Savings Account (SB)</p>
                            </div>
                            <div className="serviceBlock rounded-md bg-[#FAFAFA] shadow-[0_4px_4px_0_#00000014] cursor-pointer">
                                <Image src="/images/service2.png" className="w-full" width={100} height={80} alt="Postal Life Insurance" />
                                <p className="p-2 bg-[#FAFAFA] rounded-md text-[#3C3333] font-semibold">Postal Life Insurance</p>
                            </div>
                            <div className="serviceBlock rounded-md bg-[#FAFAFA] shadow-[0_4px_4px_0_#00000014] cursor-pointer">
                                <Image src="/images/service3.png" className="w-full" width={100} height={80} alt="Philately" />
                                <p className="p-2 bg-[#FAFAFA] rounded-md text-[#3C3333] font-semibold">Philately</p>
                            </div>
                            <div className="serviceBlock rounded-md bg-[#FAFAFA] shadow-[0_4px_4px_0_#00000014] cursor-pointer">
                                <Image src="/images/service4.png" className="w-full" width={100} height={80} alt="Jan Suraksha Schemes" />
                                <p className="p-2 bg-[#FAFAFA] rounded-md text-[#3C3333] font-semibold">Jan Suraksha Schemes</p>
                            </div>
                            <div className="serviceBlock rounded-md bg-[#FAFAFA] shadow-[0_4px_4px_0_#00000014] cursor-pointer">
                                <Image src="/images/service5.png" className="w-full" width={100} height={80} alt="National Pension Sytem" />
                                <p className="p-2 bg-[#FAFAFA] rounded-md text-[#3C3333] font-semibold">National Pension Sytem</p>
                            </div>
                            <div className="serviceBlock rounded-md bg-[#FAFAFA] shadow-[0_4px_4px_0_#00000014] cursor-pointer">
                                <Image src="/images/service6.png" className="w-full" width={100} height={80} alt="India Post Payments Bank" />
                                <p className="p-2 bg-[#FAFAFA] rounded-md text-[#3C3333] font-semibold">India Post Payments Bank</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-2/5 w-full">
                    <div className="border border-[#D3D2D2] h-full">
                        <p className="text-[#C62829] text-[0.875rem] font-normal p-2">QUICK</p>
                        <p className="text-[#474118] text-[1.5rem] p-2 pt-0">Updates</p>
                        <div className="">
                            <QuickUpdates />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}