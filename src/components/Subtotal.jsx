import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../context/StateProvider';
import { getBasketTotal } from '../context/Reducer';

const Subtotal = () => {
  const [{ basket }] = useStateValue();

  return (
    <>
      <div className="bg-white shadow-sm px-2 md:px-5 pt-1 md:pt-3 pb-2 md:pb-4 lg:pb-7 mb-1 lg:mb-5">
        <CurrencyFormat
          renderText={(value) => (
            <div className='md:mb-2 -mb-2'>
              <div className="flex flex-row items-baseline">
                <span className='text-[0.5rem] font-medium md:text-lg text-[#0f1111] md:mb-1'>Subtotal ({basket.length} items):</span>
                <span className='ml-1 font-semibold text-xs md:text-2xl'>{value}</span>
              </div>
              <span className="text-[0.3rem] md:text-sm items-center">
                <input type="checkbox" className='md:mr-1 w-1 md:w-3 h-1 md:h-3' /> This order contains a gift
              </span>
            </div>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
        <button className="text-[0.35rem] w-20 md:w-52 lg:w-72 md:text-xs text-[#0f1111] px-1 md:px-2 lg:px-4 py-[0.15rem] md:py-1 md:mr-2 shadow-lg bg-[#FFD814] border-[#FCD200] hover:bg-[#e0c123] text-center rounded-sm md:rounded-md lg:rounded-lg">Proceed to Checkout</button>
      </div>
      <div className="flex bg-white shadow-sm rounded-xl lg:px-5 pt-2 md:pt-7 text-white" />
    </>
  );
};

export default Subtotal;
