/* eslint-disable @next/next/no-img-element */
"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay} from 'swiper/modules';
// import required modules
import { Pagination } from 'swiper/modules';
// import { Navigation } from 'swiper/modules';
import Link from 'next/link';


const Banner = () => {


    return (
      <>
      
        <div className=''>
        <div className='flex flex-col lg:flex-row gap-3'>
            <Swiper autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }} 
        pagination={{
          dynamicBullets: true,
        }}
        // navigation={true}
         modules={[Autoplay, Pagination]} className="mySwiper w-full lg:w-[100%]">
        <SwiperSlide className='rounded-sm w-full h-[40vh] md:h-[90vh] bg-cover bg-center bg-no-repeat banner1'>
           
            <div className='w-full gap-0 h-[40vh] md:h-[90vh] flex flex-row lg:flex-row justify-center items-center bg-[#000000a7]'>
          <div className='w-full flex flex-col justify-center items-start ml-2 md:ml-14 space-y-2 md:space-y-3'>  
            <h1 className='text-left  text-white font-medium tracking-[.12em] text-[10px] md:text-xl'>BANGLADESH TEXTILE INDUSTRY</h1>
            <h1 className='text-left  text-white font-bold tracking-[.12em] text-2xl md:text-6xl'>You Can Never Go Wrong</h1>
            <h1 className='text-left  text-white font-bold tracking-[.12em] text-2xl md:text-5xl'>With Our Quality.</h1>
            <div className='flex flex-col gap-3 md:flex-row'>
            
            <Link href={'/enroll'}><button className='mt-5 btn text-white shadow-amber-800 border-none bg-amber-600 hover:bg-amber-900 px-4 md:px-8 text-sm md:text-xl w-28 md:w-44'>Get Service</button></Link>
            </div>
            </div>

            
            </div>
        </SwiperSlide>
        
                <SwiperSlide className='rounded-sm w-full h-[40vh] md:h-[90vh] bg-cover bg-center bg-no-repeat banner2'>
           
            <div className='w-full gap-0 h-[40vh] md:h-[90vh] flex flex-row lg:flex-row justify-center items-center bg-[#000000a7]'>
          <div className='w-full flex flex-col justify-center items-start ml-2 md:ml-14 space-y-2 md:space-y-3'>  
            <h1 className='text-left  text-white font-medium tracking-[.12em] text-[10px] md:text-xl'>BANGLADESH TEXTILE INDUSTRY</h1>
            <h1 className='text-left  text-white font-bold tracking-[.12em] text-2xl md:text-6xl'>Global Standards, Local Expertise.</h1>
            <h1 className='text-left  text-white font-bold tracking-[.12em] text-2xl md:text-5xl'>– We Make It Happen.</h1>
            <div className='flex flex-col gap-3 md:flex-row'>
            
            <Link href={'/enroll'}><button className='mt-5 btn text-white shadow-amber-800 border-none bg-amber-600 hover:bg-amber-900 px-4 md:px-8 text-sm md:text-xl w-28 md:w-44'>About Us</button></Link>
            </div>
            </div>

            
            </div>
        </SwiperSlide>
                <SwiperSlide className='rounded-sm w-full h-[40vh] md:h-[90vh] bg-cover bg-center bg-no-repeat banner3'>
           
            <div className='w-full gap-0 h-[40vh] md:h-[90vh] flex flex-row lg:flex-row justify-center items-center bg-[#000000a7]'>
          <div className='w-full flex flex-col justify-center items-start ml-2 md:ml-14 space-y-2 md:space-y-3'>  
            <h1 className='text-left  text-white font-medium tracking-[.12em] text-[10px] md:text-xl'>BANGLADESH TEXTILE INDUSTRY</h1>
            <h1 className='text-left  text-white font-bold tracking-[.12em] text-2xl md:text-6xl'>Bulk Orders, Premium Quality</h1>
            <h1 className='text-left  text-white font-bold tracking-[.12em] text-2xl md:text-5xl'>– Always On Time."</h1>
            <div className='flex flex-col gap-3 md:flex-row'>
            
            <Link href={'/enroll'}><button className='mt-5 btn text-white shadow-amber-800 border-none bg-amber-600 hover:bg-amber-900 px-4 md:px-8 text-sm md:text-xl w-28 md:w-44'>Contact Us</button></Link>
            </div>
            </div>

            
            </div>
        </SwiperSlide>
        
      </Swiper>

      </div>
    </div>

    
        </>
    );
};

export default Banner;