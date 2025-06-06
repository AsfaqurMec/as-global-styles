import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="w-40 bg-gray-800 text-white h-screen flex flex-col">
      <div className="p-6 text-lg font-bold">Dashboard</div>
      <ul className="flex-grow">
        <li className="p-4 hover:bg-gray-700">
          <Link href="/dashboard">Home</Link>
        </li>
        <li className="p-4 hover:bg-gray-700">
          <Link href="/dashboard/category">Add Category</Link>
        </li>
        <li className="p-4 hover:bg-gray-700">
          <Link href="/dashboard/addProduct">Add Item</Link>
        </li>
        <li className="p-4 hover:bg-gray-700">
          <Link href="/dashboard/gallery">Add Gallery</Link>
        </li>

        {/* <li className="p-4 hover:bg-gray-700">
          <Link href="/dashboard/addExam">Add Exams</Link>
        </li> */}
        {/* <li className="p-4 hover:bg-gray-700">
          <Link href="/dashboard/orders">Orders</Link>
        </li> */}
        
      </ul>
      {/* <div className="p-4 text-center bg-gray-900">Logout</div> */}
    </div>
  );
};

export default Sidebar;