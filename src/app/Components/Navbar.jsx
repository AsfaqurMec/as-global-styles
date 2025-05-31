/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client"
import Image from "next/image";
//import logo from '../../../public/Screenshot 2024-08-19 162502.png'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";

// import { useUser } from "../../context/UserContext";
import { useSession } from "next-auth/react";
import axios from "axios";
import { MdCall } from "react-icons/md";

const Navbar = () => {

  const drawerRef = useRef(null);

  const closeDrawer = () => {
    if (drawerRef.current) {
      drawerRef.current.checked = false;
    }
  };
  const  session  = useSession();
 //console.log(session);
 
//   const { user } = useUser(); // Access user data from context


  const pathname = usePathname();
  const [search, setSearch] = useState('');
  const [text, setText] = useState('')
  const [items, setItems] = useState([]);

  const [toggle, setToggle] = useState(false);

   const handleToggle = () => {
          setToggle(true);
   }

   const handleToggles = () => {
    setToggle(false);
}

   const handle = () => {
    setItems([]);
    setSearch('');
  }

  const [latest, setLatest] = useState([]);
     
  const handleSearch = () => {
    setText(search);
}

const handleDelete = () => {
  setText();
}

// useEffect(() => {
//   const getData = async () => {
//     const { data } = await axios.get(
//       ` `
//     )
    
//     setLatest(data.service)
//    // console.log(data);
//    // console.log(latest);
//   }
//   getData();
  



// }, [latest, session?.data?.user?.email, user?.email])

//console.log(latest);

  useEffect(() => {
    if (search) {
      
    
    const fetchData = async () => {
      try {
        const { data } = await axios.get(` https://electro-brown.vercel.app/search/api?search=${text}`);
        setItems(data);
       // console.log('dataaaas :',items.service);
        
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
      
    };
    fetchData();
  } else {
    setItems([]);
  }

  
  
  }, [items.service, text]);

  const Smartphone = 'Smartphone';
const Smartwatch = 'Smartwatch';
const Earbuds = 'Earbuds';
const Headphones = 'Headphones';

    return (
        <>
        
       {/* upper NAVBAR */}
       <div className="sticky top-0 z-50 shadow-sm backdrop-blur-xl ">
       <div  className="navbar shadow-sm bg-blue-100 px-1 md:px-2 flex w-full">
               <div className="w-[30%] lg:w-[20%] ">

<div className="flex justify-start gap-1 items-center">

<div className="drawer flex lg:hidden justify-start p-0">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" ref={drawerRef} />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer-4" className="drawer-button btn p-0 bg-transparent border-none shadow-none text-slate-50 hover:bg-transparent text-2xl">
          <GiHamburgerMenu className="md:w-8 w-7 h-7 md:h-8 text-black mx-1" />
        </label>
      </div>
      <div className="drawer-side z-50 overflow-y-scroll">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-[#000000] border-2 border-sky-200 text-base-content min-h-[150vh] w-80 pb-10 pt-2 px-5 z-50 space-y-0">
          <li className="flex flex-row w-full justify-end mb-10">
            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay py-1 pl-[11px] w-9 rounded-full bg-[#08b0f8] hover:bg-[#061245] text-white text-xl font-bold">
              X
            </label>
          </li>

          <Link href="/" onClick={closeDrawer}>
            <div className=" shadow-none border-y-2 shadow-blue-100 rounded-none text-white hover:text-blue-200">
              <div className="text-xl font-medium py-3">
                <h1>About Us</h1>
              </div>
            </div>
          </Link>

          <Link href="/courses" onClick={closeDrawer}>
            <div className="shadow-none border-b-2 shadow-blue-100 rounded-none text-white hover:text-blue-200">
              <div className=" text-xl font-medium py-3">
                <h1>Products</h1>
              </div>
            </div>
          </Link>

          <Link href="/instructor" onClick={closeDrawer}>
            <div className="shadow-none border-b-2 shadow-blue-100 rounded-none text-white hover:text-blue-200">
              <div className="text-xl font-medium py-3">
                <h1>Contact Us</h1>
              </div>
            </div>
          </Link>

          <Link href="/instructor" onClick={closeDrawer}>
            <div className="shadow-none border-b-2 shadow-blue-100 rounded-none text-white hover:text-blue-200">
              <div className="text-xl font-medium py-3">
                <h1>Blog</h1>
              </div>
            </div>
          </Link>

          <Link href="/instructor" onClick={closeDrawer}>
            <div className="shadow-none border-b-2 shadow-blue-100 rounded-none text-white hover:text-blue-200">
              <div className="text-xl font-medium py-3">
                <h1>Career</h1>
              </div>
            </div>
          </Link>

        </ul>
      </div>
    </div>

                   <Link href='/' className="btn hover:bg-transparent border-none bg-transparent shadow-none text-black p-0 font-bold normal-case text-lg md:text-2xl lg:text-2xl" >
                        <h1 className="lg:ml-5 ml-0">AS Global Styles</h1>
                      {/* <Image className="w-24 md:w-32 h-8 md:h-10 ml-0 lg:ml-10" src={logo} alt="logo"></Image> */}
                      </Link>
                 </div>   

               </div>


               <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" className="w-[60%] lg:w-[90%] lg:flex hidden">
                   <ul className="menu-horizontal px-1 text-sm font-normal w-full">
                   <div className="flex w-full  items-center justify-center gap-8 text-lg font-semibold ml-16">
                
                      <Link href={'/'}><h1>About Us</h1></Link>
                      <Link href={'/products'}><h1>Products</h1></Link>
                      <Link href={'/career'}><h1>Career</h1></Link>
                      <Link href={'/contact'}><h1>Contact Us</h1></Link>
                      <Link href={'/blog'}><h1>Blog</h1></Link>
                </div>
                   </ul>
               </div>



               <div className="flex w-[80%] lg:w-[30%] justify-en">
               
               <div className="w-full flex justify-end gap-2 items-center pr-1 md:pr-3 lg:pr-14">
          
        
                           <div className="flex justify-end">
                            
                               <div className="flex gap-1 md:gap-2.5">
                               {/* <button className="text-white text-white-sm bg-green-500 hover:bg-blue-500 text-white mr-2  text-white-ghost">Login</button> */}
                               <h1 className="flex gap-1 items-center uppercase font-medium text-[8px] md:text-[14px]"> <span className="text-black  "><Link href='/contact' className="text-[12px] md:text-[14px] hover:bg-blue-500 hover:text-white hover:font-semibold btn text-blue-500 border-2 border-blue-500">Get Service</Link></span> </h1>
                               
                               </div>
                            
                       </div>

        </div>
               

               </div>
           </div>
           </div>

       </>
    );
};

export default Navbar;