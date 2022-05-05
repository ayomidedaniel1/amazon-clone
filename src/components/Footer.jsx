import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='flex flex-col font-sans w-full'>
      <button className="bg-[#232F3E] hover:bg-[#29333f] h-12">
        <Link to='/'>
          <button className=" text-white font-sans text-xs md:text-sm">Back to top</button>
        </Link>
      </button>

      <div className="bg-[#19222e] flex flex-col items-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10 text-white pt-10 pb-16 max-w-5xl">
          <div className="flex flex-col font-sans">
            <span className="font-bold text-sm md:text-base pb-1">Get to Know Us</span>
            <span className="text-xs md:text-sm text-gray-300 py-1 cursor-pointer hover:underline">Careers</span>
            <span className="text-xs md:text-sm text-gray-300 py-1 cursor-pointer hover:underline">Blog</span>
            <span className="text-xs md:text-sm text-gray-300 py-1 cursor-pointer hover:underline">About Amazon</span>
            <span className="text-xs md:text-sm text-gray-300 py-1 cursor-pointer hover:underline">Investor Relations</span>
            <span className="text-xs md:text-sm text-gray-300 py-1 cursor-pointer hover:underline">Amazon Devices</span>
            <span className="text-xs md:text-sm text-gray-300 py-1 cursor-pointer hover:underline">Amazon Science</span>
          </div>

          <div className="flex flex-col font-sans">
            <span className="font-bold text-sm md:text-base pb-1">Make Money with Us</span>
            <span className="text-xs md:text-sm text-gray-300 py-1 cursor-pointer hover:underline">Sell products on Amazon</span>
            <span className="text-xs md:text-sm text-gray-300 py-1 cursor-pointer hover:underline">Sell on Amazon Business</span>
            <span className="text-xs md:text-sm text-gray-300 py-1 cursor-pointer hover:underline">Sell apps on Amazon</span>
            <span className="text-xs md:text-sm text-gray-300 py-1 cursor-pointer hover:underline">Become an Affiliate</span>
            <span className="text-xs md:text-sm text-gray-300 py-1 cursor-pointer hover:underline">Advertise Your Products</span>
            <span className="text-xs md:text-sm text-gray-300 py-1 cursor-pointer hover:underline">Self-Publish with Us</span>
            <span className="text-xs md:text-sm text-gray-300 py-1 cursor-pointer hover:underline">Host an Amazon Hub</span>
            <span className="text-xs md:text-sm text-gray-300 py-1 cursor-pointer hover:underline">› See More Make Money with Us</span>
          </div>

          <div className="flex flex-col font-sans">
            <span className="font-bold text-sm md:text-base pb-1">Amazon Payment Products</span>
            <span className="text-xs md:text-sm text-gray-300 py-1 cursor-pointer hover:underline">Amazon Business Card</span>
            <span className="text-xs md:text-sm text-gray-300 py-1 cursor-pointer hover:underline">Shop with Points</span>
            <span className="text-xs md:text-sm text-gray-300 py-1 cursor-pointer hover:underline">Reload Your Balance</span>
            <span className="text-xs md:text-sm text-gray-300 py-1 cursor-pointer hover:underline">Amazon Currency Converter</span>
          </div>

          <div className="flex flex-col font-sans">
            <span className="font-bold text-sm md:text-base pb-1">Let Us Help You</span>
            <span className="text-xs md:text-sm text-gray-300 py-1 cursor-pointer hover:underline">Amazon and COVID-19</span>
            <span className="text-xs md:text-sm text-gray-300 py-1 cursor-pointer hover:underline">Your Account</span>
            <span className="text-xs md:text-sm text-gray-300 py-1 cursor-pointer hover:underline">Your Orders</span>
            <span className="text-xs md:text-sm text-gray-300 py-1 cursor-pointer hover:underline">Shipping Rates & Policies</span>
            <span className="text-xs md:text-sm text-gray-300 py-1 cursor-pointer hover:underline">Returns & Replacements</span>
            <span className="text-xs md:text-sm text-gray-300 py-1 cursor-pointer hover:underline">Manage Your Content and Devices</span>
            <span className="text-xs md:text-sm text-gray-300 py-1 cursor-pointer hover:underline">Amazon Assistant</span>
            <span className="text-xs md:text-sm text-gray-300 py-1 cursor-pointer hover:underline">Help</span>
          </div>

        </div>

        <div className='bg-gray-700 h-[0.02rem]' />

        <div className="flex flex-row justify-center items-center h-28">
          <Link to='/' className='mr-14 -mt-4'>
            <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="img" className='h-4 md:h-6 w-8 sm:w-12 md:w-16 lg:w-24 object-contain md:mt-4 ml-1 mx-1 md:mx-5' />
          </Link>

          <button className="bg-transparent border-gray-300 border-[1px] cursor-pointer px-4 md:px-7 py-1 mx-1 text-[0.5rem] md:text-xs text-gray-300 -mt-4">English</button>
          <button className="bg-transparent border-gray-300 border-[1px] cursor-pointer px-4 md:px-7 py-1 mx-1 text-[0.5rem] md:text-xs text-gray-300 -mt-4">$ USD-US. Dollar</button>
          <button className="bg-transparent border-gray-300 border-[1px] cursor-pointer px-4 md:px-7 py-1 mx-1 text-[0.5rem] md:text-xs text-gray-300 -mt-4">United States</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;