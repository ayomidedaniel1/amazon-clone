import React from 'react';
import { useStateValue } from '../context/StateProvider';

const CheckoutProduct = ({ title, img, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      title: title
    });
  };

  return (
    <div className='flex flex-row items-start'>

      <div className="mr-2 -ml-2">
        <img src={img} alt="img" className='w-16 md:w-40 lg:w-80' />
      </div>

      <div className="flex flex-col">
        <h1 className="">{title}</h1>

        <p className="">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="">
          <p className="">{rating}</p>
        </div>

        <button
          className="text-[0.35rem] md:text-sm lg:text-base text-[#0f1111] px-1 md:px-2 lg:px-4 py-[0.15rem] md:py-1 mr-2 shadow-lg bg-[#FFD814] border-[#FCD200] hover:bg-[#e0c123] text-center rounded-sm md:rounded-md lg:rounded-lg"
          onClick={removeFromBasket}
        >
          Remove from basket
        </button>

      </div>
    </div>
  );
};

export default CheckoutProduct;
