import React from 'react';
import { Menu, ArrowDropDown, ShoppingCart } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { flag } from '../assets';

import { HiOutlineLocationMarker, HiOutlineSearch } from 'react-icons/hi';

const Header = () => {
  return (
    <div className='flex flex-col bg-[#131921] w-full static top-0 z-[100] '>

      {/* Upper Section of Header */}

      <div className="flex flex-row bg-[#131921] mt-0 py-0 md:py-1">
        <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="img" className='h-7 md:h-8 w-7 sm:w-12 md:w-16 lg:w-24 object-contain md:mt-4 ml-1 mx-1 md:mx-5' />

        <div className="flex flex-row items-center font-sans text-[0.3rem] md:text-xs text-white pr-1 md:pr-6">
          <HiOutlineLocationMarker className='w-2 md:w-5 h-2 md:h-5' />
          <div className="flex flex-col cursor-pointer">
            <span className="md:leading-3 text-[#cccccc]">Deliver to</span>
            <span className="md:leading-4 font-bold text-[0.4rem] md:text-sm">Nigeria</span>
          </div>
        </div>

        <div className="flex flex-1 items-center">
          <select name="All" className='rounded-l-sm md:rounded-l-md h-4 md:h-10 bg-[#f3f3f3] hover:bg-[#c5c1c1] text-[0.5rem] md:text-xs text-[#0f111] text-center cursor-pointer w-7 md:w-14'>
            <option>All</option>
          </select>
          <input type="text" className="w-full h-4 md:h-10" />
          <button className='rounded-r-sm md:rounded-r-md h-4 md:h-10 bg-[#febd69] hover:bg-[#cd9042] text-[0.5rem] md:text-xs text-[#0f111] text-center cursor-pointer w-7 md:w-14'>
            <HiOutlineSearch className='w-3 md:w-7 h-3 md:h-7 ml-1 md:ml-2' />
          </button>
        </div>

        <div className="flex flex-row items-center px-1 md:px-5 text-white font-sans text-[0.3rem] md:text-xs">
          <div className="flex md:flex-row mr-[0.1rem] md:mr-5 items-center">
            <img src={flag} alt="flag" className='h-1 md:h-4 w-2 md:w-5 cursor-pointer' />
            <ArrowDropDown fontSize="small" style={{ color: '#cccccc', marginLeft: '-3px', padding: '2px' }} />
          </div>
          <div className="flex flex-col pr-[0.1rem] md:pr-5 cursor-pointer">
            <span className="md:leading-3">Hello, Sign in</span>
            <span className="md:leading-4 font-bold text-[0.4rem] md:text-[0.9rem] mt-0 md:mt-0">Accounts & Lists <ArrowDropDown fontSize="small" style={{ color: '#cccccc', marginLeft: '-7px', padding: '3px' }} /></span>
          </div>
          <div className="flex flex-col pr-[0.1rem] md:pr-5 cursor-pointer">
            <span className="md:leading-3 md:-mt-1">Returns</span>
            <span className="md:leading-4 font-bold text-[0.35rem] md:text-[0.9rem]">& Order</span>
          </div>
          <div className="items-center md:px-2 pr-1 md:pr-0">
            <Badge className='cursor-pointer' badgeContent={1} color="warning">
              <ShoppingCart fontSize="small" />
            </Badge>
          </div>
        </div>
      </div>

      {/* Lower section of Header */}

      <div className="flex flex-row static top-0 z-[100] px-5 text-white items-center md:h-9 justify-start bg-[#232f3e]">
        <div className="flex flex-row -ml-4 md:ml-0 pr-2 md:pr-4 text-center items-center">
          <Menu fontSize="small" />
          <span className="font-sans font-bold text-[0.4rem] pl-1 md:text-sm">All</span>
        </div>
        <span className="font-sans text-[0.4rem] md:text-sm pr-2 md:pr-4">Today's Deals</span>
        <span className="font-sans text-[0.4rem] md:text-sm pr-2 md:pr-4">Customer Service</span>
        <span className="font-sans text-[0.4rem] md:text-sm pr-2 md:pr-4">Registry</span>
        <span className="font-sans text-[0.4rem] md:text-sm pr-2 md:pr-4">Gift Cards</span>
        <span className="font-sans text-[0.4rem] md:text-sm pr-2 md:pr-4">Sell</span>
      </div>
    </div>
  );
};

export default Header;
