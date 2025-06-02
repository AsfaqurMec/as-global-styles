import React from 'react';
import { GiRolledCloth } from "react-icons/gi";
import { RiShirtLine } from "react-icons/ri";
import { BsShop } from "react-icons/bs";
import Image from 'next/image';
import b from '../../../public/b-5.png'
import { VscPass } from "react-icons/vsc";
import { ImLink } from "react-icons/im";
import men from '../../../public/men.jpg'
import women from '../../../public/women.jpeg'
import kid from '../../../public/kids.jpg'
import denim from '../../../public/jeans-1_2048x.webp'
import jacket from '../../../public/jacket.jpg'
import hoodie from '../../../public/hoodie.jpeg'
import { ImImages } from "react-icons/im";
import { IoShirtOutline } from "react-icons/io5";
import { GiPoloShirt } from "react-icons/gi";
import { GiSewingMachine } from "react-icons/gi";
import Parallex from './Parallex';


const Home = () => {
    return (
        <>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 px-5 md:px-20 py-10'>

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

        {/* product section */}

        <section className='banner4'>
           <h1 className='text-5xl md:text-6xl text-center font-medium pt-10'>Our Products</h1>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-3 px-5 md:px-20 py-10'>

            <div className="card h-[200px]  md:h-[330px] lg:h-72 w-full rounded-none bg-base-100 relative overflow-hidden">
                <Image
                  src={men}
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-full"
                  priority
                />
                <div className="absolute inset-0 bg-[#cb9658ea] bg-opacity-50 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg font-semibold">
                    <ImLink className='text-5xl p-1 bg-amber-800 text-white rounded-full'/>
                  </span>
                  <h1 className='mt-8 text-white text-2xl'>Men Products</h1>
                </div>
              </div>

               <div className="card h-[200px]  md:h-[330px] lg:h-72 w-full rounded-none bg-base-100 relative overflow-hidden">
                <Image
                  src={women}
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-full"
                  priority
                />
                <div className="absolute inset-0 bg-[#cb9658ea] bg-opacity-50 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg font-semibold">
                    <ImLink className='text-5xl p-1 bg-amber-800 text-white rounded-full'/>
                  </span>
                  <h1 className='mt-8 text-white text-2xl'>Women Products</h1>
                </div>
              </div>

               <div className="card h-[200px]  md:h-[330px] lg:h-72 w-full rounded-none bg-base-100 relative overflow-hidden">
                <Image
                  src={kid}
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-full"
                  priority
                />
                <div className="absolute inset-0 bg-[#cb9658ea] bg-opacity-50 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg font-semibold">
                    <ImLink className='text-5xl p-1 bg-amber-800 text-white rounded-full'/>
                  </span>
                  <h1 className='mt-8 text-white text-2xl'>Kids Products</h1>
                </div>
              </div>

               <div className="card h-[200px]  md:h-[330px] lg:h-72 w-full rounded-none bg-base-100 relative overflow-hidden">
                <Image
                  src={denim}
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-full"
                  priority
                />
                <div className="absolute inset-0 bg-[#cb9658ea] bg-opacity-50 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg font-semibold">
                    <ImLink className='text-5xl p-1 bg-amber-800 text-white rounded-full'/>
                  </span>
                  <h1 className='mt-8 text-white text-2xl'>Denim Collection</h1>
                </div>
              </div>

               <div className="card h-[200px]  md:h-[330px] lg:h-72 w-full rounded-none bg-base-100 relative overflow-hidden">
                <Image
                  src={jacket}
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-full"
                  priority
                />
                <div className="absolute inset-0 bg-[#cb9658ea] bg-opacity-50 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg font-semibold">
                    <ImLink className='text-5xl p-1 bg-amber-800 text-white rounded-full'/>
                  </span>
                  <h1 className='mt-8 text-white text-2xl'>Jackets</h1>
                </div>
              </div>

               <div className="card h-[200px]  md:h-[330px] lg:h-72 w-full rounded-none bg-base-100 relative overflow-hidden">
                <Image
                  src={hoodie}
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-full"
                  priority
                />
                <div className="absolute inset-0 bg-[#cb9658ea] bg-opacity-50 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg font-semibold">
                    <ImLink className='text-5xl p-1 bg-amber-800 text-white rounded-full'/>
                  </span>
                  <h1 className='mt-8 text-white text-2xl'>Hoodies</h1>
                </div>
              </div>
          </div>


        </section>


        {/* our service section */}

             <section className=" bg-[#fff7f3] py-20">
     <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
       
               <div className="h-72 w-full ">
                <div className="h-full flex flex-col justify-center gap-3  font-semibold text-black text-5xl py-10">
                <p data-aos="zoom-in-down" data-aos-duration="1000" className='uppercase tracking-widest text-xl text-[#f29269] font-medium'>OUR SERVICE</p>
                      <h1 data-aos="zoom-in-up" data-aos-duration="1000">Textile is What We Do</h1>
                      
                   </div>
                   
                </div>

                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100" className="h-72 w-full border-[1px] border-b hover:bg-amber-400">
                <div className="h-[86%] flex flex-col justify-center gap-3  font-semibold text-black text-3xl p-10">
                <GiRolledCloth className='text-6xl'/>
                      <h1>Fabric Dyeing</h1>
                      <p className="text-base text-slate-500">we understand the importance of clear vision and its impact on your.</p>
                   </div>
                   <button className="btn rounded-none w-full bg-amber-600 border-none text-white hover:bg-amber-900">Read More</button>
                </div>

                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200" className="h-72 w-full border-[1px] border-black hover:bg-amber-400">
                <div className="h-[86%] flex flex-col justify-center gap-3  font-semibold text-black text-3xl p-10">
                    <GiSewingMachine className='text-6xl'/>
                      <h1>Garment Stitching</h1>
                      <p className="text-base text-slate-400">During your medical checkup, our skilled healthcare professionals.</p>
                   </div>
                   <button className="btn rounded-none w-full bg-amber-600 border-none text-white hover:bg-amber-900">Read More</button>
                </div>

                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100" className="h-72 w-full border-[1px] border-black hover:bg-amber-400">
                <div className="h-[86%] flex flex-col justify-center gap-3  font-semibold text-black text-3xl p-10">
                    <IoShirtOutline className='text-6xl'/>
                      <h1>Custom Apparel</h1>
                      <p className="text-base text-slate-400">we are passionate about providing top-notch dental care to help you.</p>
                   </div>
                   <button className="btn rounded-none w-full bg-amber-600 border-none text-white hover:bg-amber-900">Read More</button>
                </div>

                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200" className="h-72 w-full border-[1px] border-black hover:bg-amber-400">
                <div className="h-[86%] flex flex-col justify-center gap-3  font-semibold text-black text-3xl p-10">
                    <GiPoloShirt className='text-6xl'/>
                      <h1>Custom Design</h1>
                      <p className="text-base text-slate-400">we understand the critical role that accurate diagnostics play in guiding.</p>
                   </div>
                   <button className="btn rounded-none w-full bg-amber-600 border-none text-white hover:bg-amber-900">Read More</button>
                </div>

                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300" className="h-72 w-full border-[1px] border-black hover:bg-amber-400">
                <div className="h-[86%] flex flex-col justify-center gap-3  font-semibold text-black text-3xl p-10">
                   <ImImages className='text-6xl'/>
                      <h1>Fabric Printing</h1>
                      <p className="text-base text-slate-400">hospitals, or clinics with positive reviews and ratings from patients.</p>
                   </div>
                   <button className="btn rounded-none w-full bg-amber-600 border-none text-white hover:bg-amber-900">Read More</button>
                </div>
     </div>

   </section>

   {/* Contact Section */}

      <section>
         <Parallex></Parallex>
      </section>

      {/* Gallery Section */}

      <section className='py-14 px-5 banner4'>

        <h1 className='text-3xl md:text-8xl font-medium text-center py-16'>Gallery</h1>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>

            <div>
                <Image src={men} className='h-[350px]' alt='photo'></Image>
            </div>
            <div>
                <Image src={women} className='h-[350px]' alt='photo'></Image>
            </div>

            <div>
                <Image src={kid} className='h-[350px]' alt='photo'></Image>
            </div>
            <div>
                <Image src={jacket} className='h-[350px]' alt='photo'></Image>
            </div>
            <div>
                <Image src={hoodie} className='h-[350px]' alt='photo'></Image>
            </div>
            <div>
                <Image src={denim} className='h-[350px]' alt='photo'></Image>
            </div>
            

        </div>

      </section>

        </>
    );
};

export default Home;
