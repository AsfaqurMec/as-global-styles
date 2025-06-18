import { NextResponse } from "next/server";
import { connectDB } from "../../../../lib/connectDB";
import { ObjectId } from "mongodb";

export async function GET(req) {
  try {
    // Get the URL and extract the query parameter
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

   // console.log("Requested ID:", id);

    if (!id) {
      return new Response(JSON.stringify({ message: "Product ID is required" }), {
        status: 400,
      });
    }

    const db = await connectDB();
    const productCollection = db.collection("products");

    const product = await productCollection.findOne({ _id: new ObjectId(id) });

    if (!product) {
      return new Response(JSON.stringify({ message: "Product not found" }), {
        status: 404,
      });
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    return new Response(JSON.stringify({ message: "Failed to fetch product" }), {
      status: 500,
    });
  }
}
