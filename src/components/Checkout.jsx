import React from 'react';
import { checkout } from '../assets';
import Subtotal from './Subtotal';

const Checkout = () => {
  return (
    <div className="flex flex-row justify-center font-sans my-3 md:my-6 lg:my-8">

      <div className="flex flex-col">
        <div className='flex flex-row items-start bg-white shadow-sm md:pl-3 lg:pl-5 md:pt-6 lg:pt-10 pb-4 mr-2 md:mr-3 lg:mr-4 mb-3 md:mb-5'>

          <div className="mr-2 -ml-2">
            <img src={checkout} alt="img" className='w-16 md:w-40 lg:w-80' />
          </div>

          <div className="flex flex-col">
            <h1 className="text-[0.55rem] md:text-lg lg:text-2xl font-bold text-[#0f1111] md:mb-1 mt-3">Your Amazon Cart is empty</h1>
            <span className="text-[0.45rem] md:text-xs lg:text-sm text-[#007185] hover:text-[#c7511f] cursor-pointer hover:underline mb-1 md:mb-3">
              Shop today's deals
            </span>
            <div className="flex flex-row">
              <button className="text-[0.35rem] md:text-sm lg:text-base text-[#0f1111] px-1 md:px-2 lg:px-4 py-[0.15rem] md:py-1 mr-2 shadow-lg bg-[#FFD814] border-[#FCD200] hover:bg-[#e0c123] text-center rounded-sm md:rounded-md lg:rounded-lg">
                Sign into your account
              </button>
              <button className="text-[0.35rem] md:text-sm lg:text-base text-[#0f1111] border-[#D5D9D9] bg-white hover:bg-slate-200 px-1 md:px-2 lg:px-4 py-[0.15rem] md:py-1 shadow-lg text-center rounded-sm md:rounded-md lg:rounded-lg">Sign up now</button>
            </div>
          </div>
        </div>

        <div className="flex bg-white shadow-sm md:pl-3 lg:pl-5 md:pt-16 pb-4 mr-2 md:mr-3 lg:mr-4 text-white mb-3 md:mb-5" />

        <div className="flex flex-col bg-[#eaeded]">
          <span className="font-sans text-[0.35rem] md:text-xs pb-1">
            The price and availability of items at Amazon.com are subject to change. The Cart is a temporary place to store a list of your items and reflects each item's most recent price. <button className='text-blue-500 hover:text-red-500 hover:underline'>Learn more</button>
          </span>
          <span className="font-sans text-[0.35rem] md:text-xs">
            Do you have a gift card or promotional code? We'll ask you to enter your claim code when it's time to pay.
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        <Subtotal />
      </div>

    </div>
  );
};

export default Checkout;
