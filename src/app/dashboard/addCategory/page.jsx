'use client';
import Layout from '../../Components/Layout';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { CldUploadWidget } from "next-cloudinary";
import Image from 'next/image';



const page = () => {

  const [imageUrl, setImageUrl] = useState('');
const [imageUrl1, setImageUrl1] = useState('');
  const [product, setProduct] = useState({
    title: "",
    name: "",
    image: "",
    
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

    const resp = await fetch('/dashboard/addCategory/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });

    if (resp.status === 200) {
      toast.success("Category Added Successfully");
       setProduct({ ...product, image: '', title: '', name: ''})
    } else {
      toast.error("Something went Wrong");
    }
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold text-center mb-20">Add New Category</h1>
      <form onSubmit={handleSubmit} action="" className="space-y-4 w-[90%] lg:w-[50%] mx-auto p-5 shadow-2xl shadow-blue-300 border-blue-300 border-2 rounded-md">
        
        <div>
          <label htmlFor="image" className="block font-medium">Upload Category Image</label>
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
        
        
        
        <div>
          <label htmlFor="title" className="block font-medium">Category Name</label>
          <input
            type="text"
            id="name"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label htmlFor="class" className="block font-medium">Category Title</label>
          <input
            type="text"
            id="title"
            value={product.title}
            onChange={(e) => setProduct({ ...product, title: e.target.value })}
            className="w-full border rounded p-2"
          />
        </div>


        <button 
          type="submit"
          className="btn bg-teal-500 text-white px-6 py-2 rounded w-full"
        >
          Submit Class
        </button>
      </form>
      <Toaster />
    </Layout>
  );
};

export default page;
