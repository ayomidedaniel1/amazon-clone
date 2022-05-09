import React from 'react';
import { home1 } from '../assets';
import { Row1, Row2, Row3, Row4, Row5, Row6 } from './products';
import { row1, row2, row3, row4, row5, row6 } from '../constants';
// import { useStateValue } from '../context/StateProvider';

const Home = () => {
  // const [{ basket }, dispatch] = useStateValue();

  // console.log(basket);

  // const addToBasket = (img, title, rating, price) => {
  //   // dispatch the item into the data layer
  //   dispatch({
  //     type: 'ADD_TO_BASKET',
  //     item: {
  //       img: img,
  //       title: title,
  //       rating: rating,
  //       price: price
  //     }
  //   });
  // };

  return (
    <div className='flex flex-col items-center'>
      <img
        className="w-full -mb-36 home-image"
        src={home1}
        alt="img"
      />

      <div className="container z-10 font-serif grid grid-cols-2 md:grid-cols-4 gap-1">
        {row4.map((item, index) => (
          <Row4 key={item.title + index} img={item.img} title={item.title} rating={item.rating} price={item.price} />
        ))}
      </div>

      <div className="container z-10 font-serif grid grid-cols-2 md:grid-cols-4 gap-1">
        {row5.map((item, index) => (
          <Row5 key={item.title + index} img={item.img} title={item.title} rating={item.rating} price={item.price} />
        ))}
      </div>

      <div className="container z-10 font-serif grid grid-cols-3 gap-1">
        {row1.map((item, index) => (
          <Row1 key={item.title + index} img={item.img} title={item.title} rating={item.rating} price={item.price} />
        ))}
      </div>

      <div className="container z-10 font-serif grid grid-cols-2 md:grid-cols-4 gap-1">
        {row2.map((item, index) => (
          <Row2 key={item.title + index} img={item.img} title={item.title} rating={item.rating} price={item.price} />
        ))}
      </div>

      <div className="container z-10 font-serif grid grid-cols-3 md:grid-cols-5 gap-1">
        {row3.map((item, index) => (
          <Row3 key={item.title + index} img={item.img} title={item.title} rating={item.rating} price={item.price} />
        ))}
      </div>

      <div className="container z-10 font-serif grid grid-cols-2 md:grid-cols-4 gap-1">
        {row6.map((item, index) => (
          <Row6 key={item.title + index} img={item.img} title={item.title} rating={item.rating} price={item.price} />
        ))}
      </div>

    </div>
  );
};

export default Home;
