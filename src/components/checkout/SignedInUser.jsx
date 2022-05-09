import React from 'react';
import { useStateValue } from '../../context/StateProvider';
import CheckoutProduct from '../CheckoutProduct';

const SignedInUser = () => {
  const [{ basket }] = useStateValue();

  return (
    <>
      <div className="flex flex-col ml-3 md:ml-1 md:-mt-5">
        <h1 className="text-[0.55rem] md:text-lg lg:text-2xl font-medium text-[#0f1111] mb-1 md:mb-4">Shopping Cart</h1>

        <div className='bg-gray-300 pt-[0.05rem] mb-2 md:mb-5 mr-5' />

        {basket.map((item, index) => (
          <CheckoutProduct key={item.title + index} img={item.img} title={item.title} rating={item.rating} price={item.price} />
        ))}
      </div>
    </>
  );
};

export default SignedInUser;
