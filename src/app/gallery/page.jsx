import React from 'react';
import men from '../../../public/men.jpg'
import women from '../../../public/women.jpeg'
import kid from '../../../public/kids.jpg'
import denim from '../../../public/jeans-1_2048x.webp'
import jacket from '../../../public/jacket.jpg'
import hoodie from '../../../public/hoodie.jpeg'
import Image from 'next/image';



const page = () => {
    return (
        <div>
          <section className='py-14 px-5 banner4'>
          
                  <h1 className='text-3xl md:text-8xl font-medium text-center py-10'>Gallery</h1>
          
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
        </div>
    );
};

export default page;