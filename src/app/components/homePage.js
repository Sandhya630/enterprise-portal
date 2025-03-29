import TrackandTrace from './trackandtrace';
import LocatePostOffice from './locatePostOffice';
import HelplineGrievance from './helplineGrievance';
import { MinistersCol } from './ministers';
import { DeliveringEfficiently } from './deliveringEfficiently';
import { ServicesSchemes } from './servicesSchemes';


const HomePage = () => {
    return (
        <>
            <section className='homePageSection'>
                <section className="bannerSection">
                    <div className="w-full bg-cover bg-right h-[30rem]" style={{ backgroundImage : "url('/images/Banners.png')", }}>
                        <div className="text-left py-16 xl:pl-[20rem] pl-[7rem] flex flex-col items-start">
                            <h2 className="text-[#342122] text-2xl font-semibold">Explore a Whole New</h2>
                            <h1 className="text-4xl md:text-5xl font-bold text-[#C62829]">World of Stamps</h1>
                            <p className="md:text-3xl text-2xl font-light text-[#342122] mt-4 w-2/5">Your one-stop destination for stamps from 1854 to today.</p>
                            <button className="mt-6 bg-[#C62829] text-white py-3 px-6 text-lg font-semibold rounded-md hover:bg-red-800 transition">
                                View Catalogue
                            </button>
                        </div>
                    </div>
                </section>
                
                <section className='postalServices'>
                    <div className='flex flex-col md:flex-row gap-3'>
                        <div className='w-2/3 lg:p-7 lg:pr-0 pr-0 p-3'>
                            <TrackandTrace />
                            <div className='mt-2'>
                                <LocatePostOffice />
                            </div>
                            <div className='mt-2'>
                                <HelplineGrievance />
                            </div>
                        </div>
                        <div className='w-1/3 lg:p-7 p-3'>
                            <MinistersCol />
                        </div>
                    </div>
                </section>

                <section className='deliveringFields lg:p-7 p-3 bg-[#F7F7F7]'>
                    <DeliveringEfficiently />
                </section>

                <section className='servicesSchemes lg:p-7 p-3'>
                    <ServicesSchemes />
                </section>
            </section>
        </>
    );
};

export default HomePage;