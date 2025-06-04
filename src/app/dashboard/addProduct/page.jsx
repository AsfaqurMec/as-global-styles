'use client';
import Layout from '@/Components/Layout';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { CldUploadWidget } from "next-cloudinary";


const page = () => {

  const [imageUrl, setImageUrl] = useState('');
const [imageUrl1, setImageUrl1] = useState('');
  const [product, setProduct] = useState({
    title: "",
    subject: "",
    video: "",
    
  });


  const handleDebug = () => {
    console.log('Widget opened');
  };


// const handleUploadComplete = (result) => {
//   if (result?.event === 'success') {
//     const uploadedUrl = result.info.secure_url;

//     if (!product.image1) {
//       setImageUrl(uploadedUrl);
//       setProduct((prev) => ({ ...prev, image1: uploadedUrl }));
//       toast.success('Image 1 uploaded successfully!');
//     } else if (!product.image2) {
//       setImageUrl1(uploadedUrl);
//       setProduct((prev) => ({ ...prev, image2: uploadedUrl }));
//       toast.success('Image 2 uploaded successfully!');
//     } else {
//       toast.error('Both image slots are already filled!');
//     }
//   } else {
//     toast.error('Image upload failed or canceled.');
//   }
// };

const handleUploadComplete = (result) => {
  if (result?.event === 'success') {
    const uploadedUrl = result.info.secure_url;

    setProduct((prev) => {
      // Check if the first slot is empty
      if (!prev.video) {
        toast.success('Image 1 uploaded successfully!');
        return { ...prev, video: uploadedUrl }; // Update image1
      }
      // Check if the second slot is empty
    
    });
  } else {
    toast.error('Image upload failed or canceled.');
  }
};

  const handleAddRam = () => {
    if (ramInput.trim()) {
      setProduct({ ...product, ram: [...product.ram, ramInput] });
      setRamInput("");
    }
  };

  const handleAddRom = () => {
    if (romInput.trim()) {
      setProduct({ ...product, rom: [...product.rom, romInput] });
      setRomInput("");
    }
  };

  const handleAddColor = () => {
    if (colorInput.trim()) {
      setProduct({ ...product, colors: [...product.colors, colorInput] });
      setColorInput("");
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
   // console.log("Product Details:", product);

    const resp = await fetch('/dashboard/addProduct/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });

    if (resp.status === 200) {
      toast.success("Class Added Successfully");
    } else {
      toast.error("Something went Wrong");
    }
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold text-center mb-20">Add New Class</h1>
      <form onSubmit={handleSubmit} action="" className="space-y-4 w-[90%] lg:w-[50%] mx-auto p-5 shadow-2xl shadow-blue-300 border-blue-300 border-2 rounded-md">
        <div>
          <label htmlFor="title" className="block font-medium">Class Title</label>
          <input
            type="text"
            id="title"
            value={product.title}
            onChange={(e) => setProduct({ ...product, title: e.target.value })}
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label htmlFor="class" className="block font-medium">Class Link</label>
          <input
            type="text"
            id="class"
            value={product.video}
            onChange={(e) => setProduct({ ...product, video: e.target.value })}
            className="w-full border rounded p-2"
          />
        </div>


        <div>
          <label htmlFor="title" className="block font-medium">Class Subject</label>
          {/* <input
            type="text"
            id="subject"
            value={product.subject}
            onChange={(e) => setProduct({ ...product, subject: e.target.value })}
            className="w-full border rounded p-2"
          /> */}
          <select
          value={product.subject}
          onChange={(e) => setProduct({ ...product, subject: e.target.value })}
          className="w-full p-2 border rounded"
        >  
          <option>Enter Subject</option>
          <option value={'Physics'}>Physics</option>
         
          <option value={'English'}>English</option>
          <option value={'Chemistry'}>Chemistry</option>
          <option value={'HigherMath'}>Higher Math</option>
        </select>
        </div>

        {/* <div>
          <label htmlFor="image" className="block font-medium">Upload Video</label>
          <CldUploadWidget 
       cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "dzmglrehf"}
      uploadPreset="electro"
      onSuccess={(result) => handleUploadComplete(result)}
      onWidgetOpen={handleDebug}
      >
  {({ open }) => {
    return (
      <button  type="button" className='btn bg-blue-500 rounded-md text-white' onClick={() => open()}>
        Upload Class
      </button>
    );
  }}
</CldUploadWidget>
 
 <div className='flex justify-start items-center gap-10'>        
{product.video && (
  <div className="flex gap-3 flex-col">
    <h2>Uploaded Video:</h2>
    <video src={product.video}  style={{ width: '500px', height:"300px" }} controls controlsList="nodownload">
       <source src={product.video} type="video/mp4"/>
    </video>
  </div>
)}

</div>
        </div> */}

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
