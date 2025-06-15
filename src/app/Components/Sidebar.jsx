import Link from 'next/link';
import { signOut } from "next-auth/react";

const Sidebar = () => {
  return (
    <div className="w-40 bg-gray-800 text-white h-screen flex flex-col">
      <div className="p-6 text-lg font-bold">Dashboard</div>
      <ul className="flex-grow">
        <li className="p-4 hover:bg-gray-700">
          <Link href="/dashboard">Home</Link>
        </li>
        <li className="p-4 hover:bg-gray-700">
          <Link href="/dashboard/addCategory">Add Category</Link>
        </li>
        <li className="p-4 hover:bg-gray-700">
          <Link href="/dashboard/addProduct">Add Products</Link>
        </li>
        <li className="p-4 hover:bg-gray-700">
          <Link href="/dashboard/gallery">Add Gallery</Link>
        </li>

        {/* <li className="p-4 hover:bg-gray-700">
          <Link href="/dashboard/addExam">Add Exams</Link>
        </li> */}
        {/* <li className="p-4 hover:bg-gray-700">
          <Link href="/dashboard/products">Products</Link>
        </li> */}
         <div onClick={() => signOut({ callbackUrl: "/" })} className="cursor-pointer p-4 text-center bg-gray-900">Logout</div>
      </ul>
     
    </div>
  );
};

export default Sidebar;