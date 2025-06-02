import Image from 'next/image';
import React from 'react';
import { VscPass } from 'react-icons/vsc';
import b from '../../../public/b-5.png';

const page = () => {
    return (
        <div>
           <div className='bg-[#000000] text-center py-10  mb-10 text-white'>
            <h1 className='text-5xl font-semibold text-[#f29269] mb-3'>About Us</h1>
            <h1 className='flex justify-center text-lg items-center gap-2'> Home / About Us</h1>

         </div> 


          {/*about section  */}

          <section className='py-32 bg-gray-100'>
            <div className='w-full flex lg:flex-row items-center flex-col gap-8 lg:gap-3 px-2 lg:px-36'>
                <div className='lg:w-1/2 w-full h-full'>
                  <Image src={b} alt='fe' className='rounded-md h-[420px]'></Image>
                  
                </div>
                <div className='lg:w-1/2 w-full space-y-2'>
                    <h1 className='text-md'>About AS Global Styles</h1>
                    <h1 className='text-3xl md:text-5xl font-bold text-amber-950'>You Can Find All Kinds of Fabric Here</h1>
                    <div className='flex gap-2 w-full pt-3'>
                        <div className='w-1/2'>
                            <h1 className='text-xl font-bold text-amber-700 pb-2'>Our Mission</h1>
                            <h1 className='pl-2 text-[10px] md:text-[14px] pb-1 flex gap-1 items-center'><VscPass className='text-xl'/>Ensure Premium Quality</h1>
                            <h1 className='pl-2 text-[10px] md:text-[14px] pb-1 flex gap-1 items-center'><VscPass className='text-xl'/>Prioritize Customer Satisfaction</h1>
                            <h1 className='pl-2 text-[10px] md:text-[14px] pb-1 flex gap-1 items-center'><VscPass className='text-xl'/>Promote Ethical Production</h1>
                            <h1 className='pl-2 text-[10px] md:text-[14px] pb-1 flex gap-1 items-center'><VscPass className='text-xl'/>Innovate with Passion</h1>
                            <h1 className='pl-2 text-[10px] md:text-[14px] pb-1 flex gap-1 items-center'><VscPass className='text-xl'/>Deliver On Time</h1>
                        </div>

                         <div className='w-1/2'>
                            <h1 className='text-xl font-bold text-amber-700 pb-2'>Our Vision</h1>
                            <h1 className='pl-2 text-[10px] md:text-[14px] pb-1 flex gap-1 items-center'><VscPass className='text-xl'/>Lead Global Fashion</h1>
                            <h1 className='pl-2 text-[10px] md:text-[14px] pb-1 flex gap-1 items-center'><VscPass className='text-xl'/>Inspire Sustainable Growth</h1>
                            <h1 className='pl-2 text-[10px] md:text-[14px] pb-1 flex gap-1 items-center'><VscPass className='text-xl'/>Build Trusted Partnerships</h1>
                            <h1 className='pl-2 text-[10px] md:text-[14px] pb-1 flex gap-1 items-center'><VscPass className='text-xl'/>Empower Through Innovation</h1>
                            <h1 className='pl-2 text-[10px] md:text-[14px] pb-1 flex gap-1 items-center'><VscPass className='text-xl'/>Set Industry Standards</h1>
                        </div>
                    </div>
                </div>
             </div>
        </section>
        </div>
    );
};

export default page;