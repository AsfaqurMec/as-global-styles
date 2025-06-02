"use client"

import Image from "next/image";
import img from '../../../public/b4.jpg'



const Parallex = () => {



    return (
        <div className="relative h-screen overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bb"
        style={{
        
          transition: 'transform 0.1s ease-out',
          backgroundSize: "cover",
backgroundPosition: "center",
backgroundRepeat: "no-repeat",
backgroundAttachment: "fixed", // Smooth out the movement
        }}
      ></div >

      <div className="relative z-10 w-full h-full pb-32">
        <div className="flex flex-col items-center justify-end w-full h-full ">
      <h1 className='uppercase tracking-widest text-2xl mb-3 text-[#ffffff] font-medium'>fill the form</h1>
      <h1 className="mb-5 text-6xl font-semibold text-[#ffffff]">Contact Form.</h1>

      <div className=" flex items-end justify-center w-full ">
         
         <div className="flex w-full flex-row lg:w-[100%] mx-auto">
             
             <div className="w-[95%] lg:w-[80%] mx-auto h-full">
             <form  
               className='w-full space-y-6 bg-[#eae8e8] px-8 py-12'
           >
             <div className='space-y-4'>
              <div className="flex gap-5"> 
             <div className="w-1/2">
               
               <input
                 type='text'
                 name='name'
                 id='name'
                 placeholder='Name'
                 className='w-full px-3 py-2 border-[#000000] rounded-md border-2 focus:outline-none bg-transparent text-gray-900'
                 data-temp-mail-org='0'
               />
             </div>
             <div className="w-1/2">
               
               <input
                 type='email'
                 name='email'
                 id='email'
                 required
                 placeholder='Email'
                 className='w-full px-3 py-2 border-[#000000] rounded-md border-2 focus:outline-none bg-transparent text-gray-900'
                 data-temp-mail-org='0'
               />
             </div>
 
             </div>
 
             <div className="flex gap-5 w-full"> 
             <div className="w-1/2">
               
               <input
                 type='text'
                 name='name'
                 id='name'
                 placeholder='Your Number'
                 className='w-full px-3 py-2 border-[#000000] rounded-md border-2 focus:outline-none bg-transparent text-gray-900'
                 data-temp-mail-org='0'
               />
             </div>
             <div className="w-1/2">
               
               <input
                 type='date'
                 name='email'
                 id='email'
                 required
                 placeholder=''
                 className='w-56 px-3 py-2 border-[#000000] rounded-md border-2 focus:outline-none bg-transparent text-gray-400'
                 data-temp-mail-org='0'
               />
             </div>
 
             </div>
 
             <div>
               
               {/* lg */}
 <textarea placeholder="your massage" className="resize-none h-[106px] textarea border-[#000000] rounded-md border-2 focus:outline-[#e2b29d] bg-transparent textarea-lg w-full " ></textarea>
             </div>
 <div className='w-full flex justify-center'><button className='btn border-[#000000] rounded-sm border-2 focus:outline-none  text-white  bg-amber-600  hover:bg-amber-800 px-5 font-medium  text-2xl uppercase'>Contact</button></div>
             </div> 
           </form>
             </div>
         </div>
       </div>

      </div>
      

      </div>
    </div>
    );
};

export default Parallex;