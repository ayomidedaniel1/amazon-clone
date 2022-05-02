import React from 'react';

const Row6 = ({ title, img, price, rating }) => {
  return (
    <div className="flex flex-col md:px-4 px-2 my-2 mx-1 md:mx-4 bg-white">
      <div className="items-center pt-5">
        <img src={img} alt="img" className='w-28 md:w-60 h-32 md:h-72' />
      </div>

      <div className="flex flex-col">
        <p className='text-xs md:text-base'>{title}</p>
        <p className="md:py-1">
          <small className='text-xs md:text-base'>$</small>
          <strong className='text-xs md:text-base'>{price}</strong>
        </p>
        <div className="flex md:py-1">
          <p className='text-[0.5rem] md:text-xs'>{rating}</p>
        </div>
      </div>

      <button className='bg-[#febd69] hover:bg-[#cd9042] mt-1 md:mt-2 mb-5 text-[0.5rem] md:text-sm p-1 mx-8 md:mx-10 shadow'>Add to Basket</button>
    </div>
  );
};

export default Row6;