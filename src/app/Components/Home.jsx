import React from 'react';
import { GiRolledCloth } from "react-icons/gi";
import { RiShirtLine } from "react-icons/ri";
import { BsShop } from "react-icons/bs";
import Image from 'next/image';
import b from '../../../public/b-5.png'
import { VscPass } from "react-icons/vsc";


const Home = () => {
    return (
        <>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 px-20 py-10'>

            <div className='px-5 py-8 bg-amber-400 space-y-2 font-medium rounded-sm'>
                 <h1 className='flex gap-2 items-center pl-2 text-2xl '> <GiRolledCloth className='text-5xl' /> Excellent Material</h1>
                 <p>Crafted from high-quality fabrics for lasting comfort and durability. Every piece reflects our commitment to excellence in material selection.</p>
            </div>

            <div className='px-5 py-8 bg-amber-400 space-y-2 font-medium rounded-sm'>
                 <h1 className='flex gap-2 items-center pl-2 text-2xl '> <RiShirtLine className='text-5xl'/> Quality Product</h1>
                 <p>Our garments go through strict quality checks to ensure perfection. We deliver products that meet international standards in style and stitching.</p>
            </div>

            <div className='px-5 py-8 bg-amber-400 space-y-2 font-medium rounded-sm'>
                 <h1 className='flex gap-2 items-center pl-2 text-2xl '> <BsShop className='text-5xl'/> Trusted by Clients</h1>
                 <p>We’ve built long-term relationships through reliability, consistency, and excellence. Our clients trust us for on-time delivery and top-notch quality.</p>
            </div>
            
        </div>


        <section className='py-8 bg-gray-100'>
            <div className='w-full flex lg:flex-row items-center flex-col gap-8 lg:gap-3 px-5 lg:px-36'>
                <div className='lg:w-1/2 w-full h-full'>
                  <Image src={b} alt='fe' className='rounded-md h-[420px]'></Image>
                  
                </div>
                <div className='lg:w-1/2 w-full space-y-2'>
                    <h1 className='text-md'>About AS Global Styles</h1>
                    <h1 className='text-3xl md:text-5xl font-bold text-amber-950'>You Can Find All Kinds of Fabric Here</h1>
                    <div className='flex gap-2 w-full pt-3'>
                        <div className='w-1/2'>
                            <h1 className='text-xl font-bold text-amber-700 pb-2'>Our Mission</h1>
                            <h1 className='pl-2 text-[14px] pb-1 flex gap-1 items-center'><VscPass className='text-xl'/>Ensure Premium Quality</h1>
                            <h1 className='pl-2 text-[14px] pb-1 flex gap-1 items-center'><VscPass className='text-xl'/>Prioritize Customer Satisfaction</h1>
                            <h1 className='pl-2 text-[14px] pb-1 flex gap-1 items-center'><VscPass className='text-xl'/>Promote Ethical Production</h1>
                            <h1 className='pl-2 text-[14px] pb-1 flex gap-1 items-center'><VscPass className='text-xl'/>Innovate with Passion</h1>
                            <h1 className='pl-2 text-[14px] pb-1 flex gap-1 items-center'><VscPass className='text-xl'/>Deliver On Time</h1>
                        </div>

                         <div className='w-1/2'>
                            <h1 className='text-xl font-bold text-amber-700 pb-2'>Our Vision</h1>
                            <h1 className='pl-2 text-[14px] pb-1 flex gap-1 items-center'><VscPass className='text-xl'/>Lead Global Fashion</h1>
                            <h1 className='pl-2 text-[14px] pb-1 flex gap-1 items-center'><VscPass className='text-xl'/>Inspire Sustainable Growth</h1>
                            <h1 className='pl-2 text-[14px] pb-1 flex gap-1 items-center'><VscPass className='text-xl'/>Build Trusted Partnerships</h1>
                            <h1 className='pl-2 text-[14px] pb-1 flex gap-1 items-center'><VscPass className='text-xl'/>Empower Through Innovation</h1>
                            <h1 className='pl-2 text-[14px] pb-1 flex gap-1 items-center'><VscPass className='text-xl'/>Set Industry Standards</h1>
                        </div>
                    </div>
                </div>
             </div>
        </section>
        </>
    );
};

export default Home;
