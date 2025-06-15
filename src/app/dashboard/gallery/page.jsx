'use client';
import Layout from '../../Components/Layout';
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { CldUploadWidget } from "next-cloudinary";
import Image from 'next/image';
import axios from 'axios';


const page = () => {

  const [category, setCategory] = useState([]);

  useEffect(() => {
        const getData = async () => {
          const { data } = await axios.get(
            'http://localhost:3000/allGallery'
          )
          // console.log('datas',data);
          setCategory(data.service)
          
          
         
        }
        getData();
  
      }, []);

      console.log('categories',category);
      

  const [imageUrl, setImageUrl] = useState('');
const [imageUrl1, setImageUrl1] = useState('');
  const [product, setProduct] = useState({
    
    image:"",
    
  });


  const handleDebug = () => {
    console.log('Widget opened');
  };

const handleUploadComplete = (result) => {
  if (result?.event === 'success') {
    const uploadedUrl = result.info.secure_url;

    setProduct({ ...product, image: uploadedUrl})
 
} else {
  toast.error('fail to upload');
};
}

  const handleSubmit = async (e) => {
   e.preventDefault();
   // console.log("Product Details:", product);

    const resp = await fetch('/dashboard/gallery/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });

    if (resp.status === 200) {
      toast.success("Gallery Added Successfully");
      setProduct({ ...product, image:'' })
      
    } else {
      toast.error("Something went Wrong");
    }
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold text-center mb-20">Add New Gallery</h1>
      <form onSubmit={handleSubmit} action="" className="space-y-4 w-[90%] lg:w-[50%] mx-auto p-5 shadow-2xl shadow-blue-300 border-blue-300 border-2 rounded-md">
        
      <div>
          <label htmlFor="image" className="block font-medium">Upload Gallery Image</label>
          <CldUploadWidget 
       cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "dzmglrehf"}
      uploadPreset="electro"
      onSuccess={(result) => handleUploadComplete(result)}
      onWidgetOpen={handleDebug}
      >
  {({ open }) => {
    return (
      <button  type="button" className='btn bg-blue-500 rounded-md text-white' onClick={() => open()}>
        Upload Image
      </button>
    );
  }}
</CldUploadWidget>
 
 <div className='flex justify-start items-center gap-10'>        
{product.image && (
  <div className="flex gap-3 flex-col">
    <h2>Uploaded Image:</h2>
    <Image src={product.image} alt='image' width={60} height={40}>
    </Image>
  </div>
)} 

</div>
        </div>
     
         

        <button 
          type="submit"
          className="btn bg-teal-500 text-white px-6 py-2 rounded w-full"
        >
          Add Gallery
        </button>
      </form>

      {/* All gallery Table  */}

    <>
<h1 className="text-center text-green-700 text-3xl font-semibold mt-10 mb-6">All Gallery</h1>
<div className="overflow-x-auto min-h-[46vh]">
    <table className="table rounded-none bg-[#e6e6e6c1]">
        {/* head */}
        <thead>
            <tr>
            <th className="px-[5px] md:px-2 text-stone-950 text-lg font-bold">Sl No.</th>
                <th className="px-[5px] md:px-2 text-stone-950 text-lg font-bold">Image</th>
                
                
                <th className="px-[5px] md:px-2 text-stone-950 text-lg font-bold">Action</th>
               
            </tr>
      
      </thead>

        <tbody>
            {
             category.map((user, index )=> 
                <tr key={user?._id}>
                <td className="px-[5px] md:px-2 font-bold text-lg">{index+1}</td>
                <td className="px-[5px] md:px-2 font-bold text-lg"><img className="w-20 h-20" src={user?.image} alt="" /></td>
                
                
                
                
                <td className="flex  gap-1 flex-row">
                
                  
                 { user?.role === 'admin' ? "" : 
                      <button onClick={()=>handleDelete(user?._id)}
                      className="btn md:mr-2 btn-info">Delete</button>
                 }
              

                </td>

            </tr>
              )
          }
        </tbody>  
    </table>

    <h1 className='my-3 text-2xl font-semibold'>Total : {category?.length}</h1>
</div>
</>

      <Toaster />
    </Layout>
  );
};

export default page;