import React from 'react';
import { checkout } from '../../assets';

const SignedOutUser = () => {
  return (
    <>
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
    </>
  );
};

export default SignedOutUser;
