// import Image from 'next/image';
// import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
// import { SiVisa, SiMastercard, SiPaypal } from 'react-icons/si';
// import Link from 'next/link';

// const Footer = () => {
//   return (
//     <footer className="mt-10  border-t-4 backdrop-blur-3xl border-blue-300 bg-blue-100 text-gray-900 py-12 shadow-md">
//       <div className="container mx-auto px-4">
//         {/* Grid for Footer Content */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
//           {/* Logo Section */}
//           <div className="w-full md:w-1/4">
//             <div className="flex items-center mb-4">
//               <Image
//                 src="/images.png"
//                 alt="Logo"
//                 width={70}
//                 height={60}
//                 className="h-16 mr-3 rounded-full border-2 border-pink-300 shadow-lg"
//               />
//               <span className="text-3xl font-bold tracking-wide text-pink-600">
//                 E-Shop
//               </span>
//             </div>
//             <p className="text-gray-700">
//               Explore premium
//             </p>
//           </div>

//           {/* Chairs Section */}
//           <div className="text-center md:text-left">
//             <h3 className="text-lg font-semibold mb-4 text-gray-800">Chairs</h3>
//             <ul className="space-y-2">
//               <li className="text-gray-700 hover:text-pink-500 transition">
//                 Office Chairs
//               </li>
//               <li className="text-gray-700 hover:text-pink-500 transition">
//                 Dining Chairs
//               </li>
//               <li className="text-gray-700 hover:text-pink-500 transition">
//                 Lounge Chairs
//               </li>
//               <li className="text-gray-700 hover:text-pink-500 transition">
//                 Recliners
//               </li>
//             </ul>
//           </div>

//           {/* Sofas Section */}
//           <div className="text-center md:text-left">
//             <h3 className="text-lg font-semibold mb-4 text-gray-800">Sofas</h3>
//             <ul className="space-y-2">
//               <li className="text-gray-700 hover:text-pink-500 transition">
//                 Sectional Sofas
//               </li>
//               <li className="text-gray-700 hover:text-pink-500 transition">
//                 Leather Sofas
//               </li>
//               <li className="text-gray-700 hover:text-pink-500 transition">
//                 Reclining Sofas
//               </li>
//               <li className="text-gray-700 hover:text-pink-500 transition">
//                 Loveseats
//               </li>
//             </ul>
//           </div>

//           {/* Newsletter Section */}
//           <div className="text-center md:text-left">
//             <h3 className="text-lg font-semibold mb-4 text-gray-800">
//               Stay Connected
//             </h3>
//             <form className="flex flex-col space-y-3">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="p-2 rounded-lg bg-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-300"
//               />
//               <button
//                 type="submit"
//                 className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg shadow-md transition"
//               >
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Social Media and Payments */}
//         <div className="flex flex-col items-center space-y-6 mb-10">
//           <div className="flex space-x-6">
//             <Link
//               href="https://instagram.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-600 hover:text-pink-500 transition"
//             >
//               <FaInstagram size={24} />
//             </Link>
//             <Link
//               href="https://facebook.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-600 hover:text-pink-500 transition"
//             >
//               <FaFacebook size={24} />
//             </Link>
//             <Link
//               href="https://linkedin.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-600 hover:text-pink-500 transition"
//             >
//               <FaLinkedin size={24} />
//             </Link>
//           </div>
//           <div className="flex space-x-6">
//             <SiVisa
//               size={32}
//               className="text-gray-600 hover:text-pink-500 transition"
//             />
//             <SiMastercard
//               size={32}
//               className="text-gray-600 hover:text-pink-500 transition"
//             />
//             <SiPaypal
//               size={32}
//               className="text-gray-600 hover:text-pink-500 transition"
//             />
//           </div>
//         </div>

//         {/* Navigation Links */}
//         <div className="flex justify-center space-x-6 mb-10">
//           <Link href="/" className="text-gray-700 hover:text-pink-500 transition">
//             Home
//           </Link>
//           <Link
//             href="/About"
//             className="text-gray-700 hover:text-pink-500 transition"
//           >
//             About
//           </Link>
//           <Link
//             href="/Contact"
//             className="text-gray-700 hover:text-pink-500 transition"
//           >
//             Contact
//           </Link>
//           <Link
//             href="/privacy"
//             className="text-gray-700 hover:text-pink-500 transition"
//           >
//             Privacy Policy
//           </Link>
//           <Link
//             href="/terms"
//             className="text-gray-700 hover:text-pink-500 transition"
//           >
//             Terms of Service
//           </Link>
//         </div>

//         {/* Footer Credit */}
//         <div className="text-center text-gray-600 text-sm">
//           © 2023 E-Commerce. Designed by Ali Hamza 
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;






import Image from "next/image";
import {FaFacebook} from "react-icons/fa"
import { RxInstagramLogo } from "react-icons/rx";
import {FaLinkedin } from "react-icons/fa"

const Footer = () => {
    return (
<div className="mt-9 bg-slate-100">
<footer className="bg-[#EEEFFB] h-auto sm:h-[500px] md:h-[500px] py-8 text-[#8A8FB9] items-center border-t-slate-400 border-2">

  <div className="container mx-auto px-12 items-center">

    {/* Responsive Grid */}
    <div className="mt-[94px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 sm:gap-8 text-center md:text-left lg:text-left">
            <div className="mt-2 sm:mt-0">
              
          {/* Logo */}
          <Image
            src="/Hekto.png"
            width={98}
            height={34}
            alt="logo"
          />
              <div className="mt-4 flex items-center gap-x-2 justify-center sm:justify-start">
               
                {/* Search */}
                <div className="w-full bg-white rounded-md items-center flex">
                  <input
                    className="w-[70%] h-11 p-1 bg-white text-black outline-none opacity-75"
                    type="search"
                    placeholder="Search"
                  />
                  <button className="text-base font-medium w-[30%] h-[39px] bg-[#FB2E86] text-[#F3F9FF]">
                    Sign Up
                  </button>
                </div>
              </div>

              <p className="mt-4 text-xs leading-4 text-center sm:text-left">
                Contact Info: <br />
                17 Princess Road, London, Greater London NW1 8JR, UK
              </p>
            </div>
  
            {/* Categories Section */}
            <div className="mt-4 leading-6">
              <h3 className="text-[18px] text-black">Categories</h3>
              <ul className="mt-2 space-x-0 md:space-y-5 md:mb-6  text-sm">
                <li>Laptops & Computers</li>
                <li>Cameras & Photography</li>
                <li>Smart Phones & Tablets</li>
                <li>Video Games & Consoles</li>
                <li>Waterproof Headphones</li>
              </ul>
            </div>
  
            {/* Customer Care Section */}
            <div className="mt-4 leading-6">
              <h3 className="text-[18px] text-black">Customer Care</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li>My Account</li>
                <li>Discount</li>
                <li>Returns</li>
                <li>Orders History</li>
                <li>Order Tracking</li>
              </ul>
            </div>
  
            {/* Pages Section */}
            <div className="mt-4 leading-6">
              <h3 className="text-[18px] text-black">Pages</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li>Blog</li>
                <li>Browse the Shop</li>
                <li>Category</li>
                <li>Pre-Built Pages</li>
                <li>Visual Composer Elements</li>
                <li>WooCommerce Pages</li>
              </ul>
            </div>
          </div>
  
         

        </div>
        </footer>
{/* bottom */}

<div className="bg-[#E7E4F8]">
  <div className="container px-5 h-[80px] sm:h-[53px] mx-auto flex items-center flex-col sm:flex-row justify-center">
    
    <p className="text-sm text-[#9DA0AE] text-center sm:ml-6 sm:mt-0 mt-4">
      © 2025 Hekto —  
      <a
        href="https://twitter.com/knyttnev"
        rel="noopener noreferrer"
        className="text-[#9DA0AE] ml-1"
        target="_blank"
      >
        ALL Right Reserved
      </a>
    </p>

    <span className="flex flex-row sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <div className="w-5 h-5"><a href="#"><FaFacebook /></a></div> 
      <div className="w-5 h-5 ml-3 text-gray-900"><a href="#"><RxInstagramLogo /></a></div>
      <div className="w-5 h-5 ml-3 text-gray-900"><a href="#"><FaLinkedin /></a></div>
    </span>

  </div>
</div>


      
        </div>
    );
  };
  
  export default Footer;
  

