import React from 'react';
import { useStateValue } from '../context/StateProvider';
import Subtotal from './Subtotal';
import { SignedInUser, SignedOutUser } from './checkout/index';

const Checkout = () => {
  const [{ user }] = useStateValue();

  return (
    <div className="flex flex-row justify-center font-sans my-3 md:my-6 lg:my-8">

      <div className="flex flex-col">
        <div className='flex flex-row items-start bg-white shadow-sm md:pl-3 lg:pl-5 md:pt-6 lg:pt-10 pb-4 mr-2 md:mr-3 lg:mr-4 mb-3 md:mb-5'>

          {user ? <SignedInUser /> : <SignedOutUser />}

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
