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
    <div className='flex flex-row items-start pl-5 mr-5 shadow-md md:pr-10'>

      <div className="pr-3 md:pr-5 my-3">
        <img src={img} alt="img" className='w-24 md:w-36 h-24 md:h-36' />
      </div>

      <div className="flex flex-col my-3 font-sans">
        <h1 className="text-xs md:text-base text-[#0f1111] mb-1 md:mb-2">{title}</h1>

        <p className="flex flex-row mb-0 md:mb-2">
          <small>$</small>
          <strong className='text-xl'>{price}</strong>
        </p>

        <span className="text-[0.45rem] md:text-xs text-[#007600] mb-0 md:mb-1">
          In Stock
        </span>

        <span className="text-[0.3rem] md:text-xs mb-1 md:mb-3">
          <input type="checkbox" className='md:mr-1 w-1 md:w-3 h-1 md:h-3' />
          <span className='mr-1'> This is a gift</span>
          <span className="text-[#007185] hover:text-[#c7511f] cursor-pointer hover:underline mb-1 md:mb-3">
            Learn more
          </span>
        </span>

        <div className="flex flex-row">
          <button
            className="text-[0.35rem] md:text-xs text-[#007185] hover:underline px-1 md:px-2 py-[0.15rem] mr-2 md:mr-2 text-center border-l-2"
            onClick={removeFromBasket}
          >
            Delete
          </button>
          <button
            className="text-[0.35rem] md:text-xs text-[#007185] hover:underline px-1 md:px-2 py-[0.15rem] mr-2 md:mr-2 text-center border-l-2"
          >
            Save for later
          </button>
          <button
            className="text-[0.35rem] md:text-xs text-[#007185] hover:underline px-1 md:px-2 py-[0.15rem] mr-2 md:mr-2 text-center border-l-2"
          >
            Compare with similar items
          </button>
        </div>

      </div>
    </div>
  );
};

export default CheckoutProduct;
