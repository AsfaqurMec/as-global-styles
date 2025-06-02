/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */

"use client"
import React, { useEffect, useState } from 'react';

// import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import AOS from 'aos';
import Image from 'next/image';
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const page = () => {
  useEffect(() => {
    AOS.init({});
}, []); // The empty dependency array ensures this runs only once on mount
    

    return (
        <>
        
            <div className=' '>
                <div className='bg-[#000000] text-center py-10  mb-10 text-white'>
            <h1 className='text-5xl font-semibold text-[#f29269] mb-3'>Contact Us</h1>
            <h1 className='flex justify-center text-lg items-center gap-2'> Home / Contact Us</h1>

         </div>

       

 <section className='w-full'>
    


  {/* section 1 */}

  <section data-aos="fade-up"  data-aos-duration="2000" className="my-20">

<div className="w-[80%] mx-auto flex flex-col lg:flex-row">
    <div className="h-56 w-full lg:w-1/3 bg-[#f7a582]">
    <div className="h-[78.6%] flex flex-col justify-center font-semibold text-white text-3xl">
       <h1 className="pl-5 pt-5">Don't Hesitate To</h1>
       <h1 className="pl-5 ">Contact us</h1>
       </div>
       <button className="btn rounded-none w-full bg-black hover:bg-slate-900  text-white mt-2 border-[#f7cab7] border-2">Make Appointment</button>
    </div>
    <div className=" h-[450px] lg:h-56 w-full lg:w-2/3 flex flex-col lg:flex-row bg-[#010d0c] p-3">
       <div className="w-full lg:w-1/2 p-8 gap-3 flex flex-col justify-center font-semibold text-white text-xl border-b-2 lg:border-b-0 border-r-0 lg:border-r-2">
          <IoCall  className="text-5xl" />
          <h1>Help Line</h1>
          <p className="text-lg text-amber-400">01956-23-02-65</p>
       </div>
       <div className="w-full lg:w-1/2 p-8 f flex gap-3 flex-col justify-center font-semibold text-white text-xl">
       <MdEmail className="text-5xl" />
          <h1>Email Address</h1>
          <p className="text-lg text-amber-400">asglobalstyles@gmail.com</p>
       </div>
    </div>
</div>


</section> 

<div className='w-full'>
         <iframe className='w-full h-screen' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7304.037215586774!2d90.37098930599858!3d23.74671584624592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b33cffc3fb%3A0x4a826f475fd312af!2sDhanmondi%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1724308715979!5m2!1sen!2sbd"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        
    </div>
   
 </section>


         <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100" className="w-full lg:w-[80%] mx-auto my-10 h-full">
             <form  
               className=' space-y-6 bg-[#2b2202] px-8 py-12'
           >

             <h1 className='text-center text-xl text-[#f29269]'>Fill The Form</h1>
             <p  className='text-center text-5xl font-semibold text-white pb-20'>Contact Form</p>

             <div className='space-y-4 w-full md:w-[80%] lg:w-[60%] mx-auto'>
              <div className="w-full flex gap-5"> 
             <div className='w-1/2'>
               
               <input
                 type='text'
                 name='name'
                 id='name'
                 placeholder='Name'
                 className='w-full px-3 py-2 border-[#e2b29d] rounded-md border-2 focus:border-b-2 focus:border-b-[#e2b29d] focus:outline-slate-200 bg-transparent text-white'
                 data-temp-mail-org='0'
               />
             </div>
             <div className='w-1/2'>
               
               <input
                 type='email'
                 name='email'
                 id='email'
                 required
                 placeholder='Email'
                 className='w-full px-3 py-2 border-[#e2b29d] rounded-md border-2 focus:outline-none bg-transparent text-white'
                 data-temp-mail-org='0'
               />
             </div>
 
             </div>
 
             <div className="flex gap-5 w-full"> 
             <div className='w-1/2' >
               
               <input
                 type='text'
                 name='name'
                 id='name'
                 placeholder='Your Number'
                 className='w-full px-3 py-2 border-[#e2b29d] rounded-md border-2 focus:outline-none bg-transparent text-white'
                 data-temp-mail-org='0'
               />
             </div>
             <div className='w-1/2'>
               
               <input
                 type='text'
                 name='email'
                 id='email'
                 required
                 placeholder='Your Subject'
                 className='w-full px-3 py-2 border-[#e2b29d] rounded-md border-2 focus:outline-none bg-transparent text-white'
                 data-temp-mail-org='0'
               />
             </div>
 
             </div>
 
             <div>
               
               {/* lg */}
 <textarea placeholder="your massage" className="resize-none h-[136px] textarea border-[#e2b29d] rounded-md border-2  bg-transparent textarea-lg w-full text-white" ></textarea>
             </div>
 <div className='w-full flex justify-center'><button className='btn border-[#e2b29d] rounded-xl border-2 focus:outline-none bg-transparent text-white  hover:text-[#000000] hover:bg-amber-800 px-5 font-medium  text-2xl uppercase'>SEND Message</button></div>
             </div> 
           </form>
             </div>

            </div>
        
        
        </>    
    );
};

export default page;