import Image from 'next/image';

export default function HelplineGrievance () {
    return (
        <>
            <div className="grid md:grid-cols-2 gap-3">
                <div className="border border-[#C99798] rounded-lg flex items-center gap-2">
                    <div className="w-2/5 p-3 relative overflow-hidden rounded-l-lg helplineImage">
                        <Image src="/images/helpline.svg" alt="Helpline" width={140} height={60} />
                    </div>
                    <div className='w-3/5 p-3'>
                        <span className='text-xs text-black fw-semibold'>Helpline: </span>
                        <p className='text-[#C62829] text-lg font-semibold tracking-wider'>18002666868</p>
                        <p className='text-md text-black fw-semibold'>9:00 AM - 6:00 PM</p>
                        <span className='text-[10px] text-[#1A1717] block mt-1 leading-3.5'>IVRS facility is available 24/7, 365 days.</span>
                        <span className='text-[10px] text-[#1A1717] block leading-3.5'>(Except Sunday & Gazetted Holidays)</span>
                    </div>
                </div>
                <div className="border border-[#C99798] rounded-lg flex items-center gap-2">
                    <div className="w-2/5 p-3 relative overflow-hidden rounded-l-lg grievanceImage flex h-[100%]">
                        <Image src="/images/grievance.svg" alt="Grievance" width={140} height={60} />
                    </div>
                    <div className='w-3/5 p-3'>
                        <p className='text-[#C62829] text-2xl tracking-wider'>Register Your Grievance</p>
                    </div>
                </div>
            </div>
        </>
    );
};
