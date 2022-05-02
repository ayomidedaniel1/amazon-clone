import React from 'react';
import { home1 } from '../assets';
import { Row1, Row2, Row3, Row4, Row5, Row6 } from './products';
import { row1, row2, row3, row4, row5, row6 } from '../constants';

const Home = () => {
  return (
    <div className='flex flex-col items-center'>
      <img
        className="w-full -mb-36 home-image"
        src={home1}
        alt="img"
      />

      <div className="container flex z-10 flex-row font-serif">
        {row4.map((item, index) => (
          <Row4 key={item.title + index} img={item.img} title={item.title} rating={item.rating} price={item.price} />
        ))}
      </div>

      <div className="container flex z-10 flex-row font-serif">
        {row5.map((item, index) => (
          <Row5 key={item.title + index} img={item.img} title={item.title} rating={item.rating} price={item.price} />
        ))}
      </div>

      <div className="container flex z-10 flex-row font-serif">
        {row1.map((item, index) => (
          <Row1 key={item.title + index} img={item.img} title={item.title} rating={item.rating} price={item.price} />
        ))}
      </div>

      <div className="container flex z-10 flex-row font-serif">
        {row2.map((item, index) => (
          <Row2 key={item.title + index} img={item.img} title={item.title} rating={item.rating} price={item.price} />
        ))}
      </div>

      <div className="container flex z-10 flex-row font-serif">
        {row3.map((item, index) => (
          <Row3 key={item.title + index} img={item.img} title={item.title} rating={item.rating} price={item.price} />
        ))}
      </div>

      <div className="container flex z-10 flex-row font-serif">
        {row6.map((item, index) => (
          <Row6 key={item.title + index} img={item.img} title={item.title} rating={item.rating} price={item.price} />
        ))}
      </div>

    </div>
  );
};

export default Home;
