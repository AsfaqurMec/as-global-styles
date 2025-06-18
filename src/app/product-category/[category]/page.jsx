
'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export default function CategoryPage() {
  const { category } = useParams(); // Get the dynamic category from URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`/category?category=${category}`);
        const data = await res.json();
        setProducts(data.products);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    }

    if (category) {
      fetchData();
    }
  }, [category]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1 className='text-5xl font-semibold text-center my-10'>{category} Products</h1>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        
            <div className='grid grid-cols-2 md:grid-cols-3 gap-3 px-5 md:px-20 py-10'>
              {products.map(product => (
                 <div key={product._id} className="card w-full rounded-none bg-base-100 relative mb-8 shadow-2xl p-2">
      <Zoom>
        <img
          className="w-full h-[220px] "
          src={product?.image}
          alt="image"
        />
      </Zoom>
      <h1 className="text-center text-lg md:text-2xl mt-1 font-medium">{product.title}</h1>
      <h1 className="text-center">{product.category}</h1>
    </div>          
               ))}
            </div>
         
        
      )}
    </div>
  );
}
