import Image from 'next/image';
import React from 'react';
import f4 from '../../../public/f4.png'
import f3 from '../../../public/f3.png'
import f2 from '../../../public/f2.png'
import f1 from '../../../public/f1.png'
import f5 from '../../../public/f5.png'

const page = () => {
    return (
        <div>

          <div className='bg-[#000000] text-center py-10  mb-10 text-white'>
            <h1 className='text-5xl font-semibold text-[#f29269] mb-3'>Services</h1>
            <h1 className='flex justify-center text-lg items-center gap-2'> Home / Services</h1>
          </div> 


          <div className='flex flex-col md:flex-row md:items-center gap-5 px-5 pb-10'>
              <div className='w-full md:w-[70%] space-y-5'>
                  <h1 className='text-4xl md:text-6xl font-medium'>Sourcing</h1>
                  <p className='text-lg font-extralight'>This involves locating the manufacturing units depending on the customer’s expectation in regard to quality, quantity, fashion and price. The source is commercially assessed in terms of financial status, bankers, and quota. It is also assessed technically in terms of machines, type of machinery, production capacity, quality control system, export performance, etc. These services can be further extended in locating reliable fabric sources, dyers and printers, which ultimately promotes quality of merchandise.</p>
              </div>


              <div className='w-full md:w-[30%]'>
                   <Image className='h-[350px]' src={f4} alt='image'></Image>
              </div>
          </div>

        <div className='flex flex-col md:flex-row-reverse md:items-center gap-5 px-5 pb-10'>
              <div className='w-full md:w-[70%] space-y-5'>
                  <h1 className='text-4xl md:text-6xl font-medium'>Quality Control</h1>
                  <p className='text-lg font-extralight'>Quality control mainly involves monitoring of quality from fabric to finished product stage in several steps as under:

Testing of production fabric in all color ways and designs to verify the conformity to buyer’s quality specifications.
Calling for approval sample prior to production and verifying the style (against the contract or buying sample) fitting and workmanship and recommending the changes and improvement if necessary.
Verification, grading and approval of size specifications.
Calling for size set (a garment in each size) in actual production fabric prior to commencement of production to check the conformity to approval sample. Incorporation of changes and improvement suggested at approval stage is verified and confirmed before commencement of production.
In-line inspection is done when the production commences. The main objective is to detect the deviations if any from contractual specifications and detect defects in advance and eliminate them before it is too late.
Final or pre-shipment inspection when the goods are ready for shipment. This is done by using AQL system of sampling and inspection.</p>
              </div>


              <div className='w-full md:w-[30%]'>
                   <Image className='h-[350px]' src={f3} alt='image'></Image>
              </div>
          </div>

          <div className='flex flex-col md:flex-row md:items-center gap-5 px-5 pb-10'>
              <div className='w-full md:w-[70%] space-y-5'>
                  <h1 className='text-4xl md:text-6xl font-medium'>Merchandising</h1>
                  <p className='text-lg font-extralight'>The services covered under this title are as under:

Monitoring of the order from fabric procurement stage to shipment and reporting the status of the order to the buyers regularly. Systematic follow up on each stage and execution of orders on time.
Monitoring of new trends in fashion and design.
Locating the sources to meet the requirements of the customer in regard to fashion and design.
Introducing new articles to buyers to enable to expand business.
Educate the customer about the characteristics of variety of fabrics, dyes, dyeing and printing process and their positive and negative points and caution the buyers about the pitfalls involved.
Liaison between the customer and supplier.
Guiding the supplier in preparation of the range to meet the customer’s requirements in regard to fashion and design.
Feedback on competitor’s activities.</p>
              </div>


              <div className='w-full md:w-[30%]'>
                   <Image className='h-[350px]' src={f1} alt='image'></Image>
              </div>
          </div>

          <div className='flex flex-col md:flex-row-reverse md:items-center gap-5 px-5 pb-10'>
              <div className='w-full md:w-[70%] space-y-5'>
                  <h1 className='text-4xl md:text-6xl font-medium'>Shipping , Documentation and Forwarding</h1>
                  <p className='text-lg font-extralight'>We have knowledge and expertise to provide total logistics and transportation solutions in Bangladesh. Working in close association with leading freight forwarders, air and shipping lines at various locations, we can provide you the following specific value added services</p>
              </div>


              <div className='w-full md:w-[30%]'>
                   <Image className='h-[350px]' src={f5} alt='image'></Image>
              </div>
          </div>

          <div className='flex flex-col md:flex-row md:items-center gap-5 px-5 pb-10'>
              <div className='w-full md:w-[70%] space-y-5'>
                  <h1 className='text-4xl md:text-6xl font-medium'>Third Party Inspection Provider</h1>
                  <p className='text-lg font-extralight'>We have a quality team for 3rd party inspection. If any of our clients don’t have any office or agent in Bangladesh, we can provide them orders follow up facilities with PP Meeting, Inline inspection, Final inspection support with a very low rate.</p>
              </div>


              <div className='w-full md:w-[30%]'>
                   <Image className='h-[350px]' src={f2} alt='image'></Image>
              </div>
          </div>

        </div>
    );
};

export default page;