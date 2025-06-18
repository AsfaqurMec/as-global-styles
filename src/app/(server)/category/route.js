// /app/api/products-by-category/route.js

import { NextResponse } from 'next/server';
import { connectDB } from "../../../../lib/connectDB";


export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const db = await connectDB();
  const category = searchParams.get('category');
const buyCollection = db.collection('products');
  try {
    const products = await buyCollection.find({category: category}).toArray();
    console.log(products);
    
    return NextResponse.json({ products });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}
