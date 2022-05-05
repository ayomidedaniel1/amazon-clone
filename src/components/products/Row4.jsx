import React from 'react';
import { Card, CardActions, CardContent, Button, Typography } from '@mui/material';

const Row4 = ({ title, img, price, rating, addToBasket }) => {
  return (
    <div className="flex flex-col px-2 my-2 mx-1">
      <Card>
        <CardContent>
          <Typography conponent='div' gutterBottom alignItems="center">
            <img src={img} alt="img" className='w-24 md:w-60 h-28 md:h-72' />
          </Typography>
          <Typography sx={{ fontSize: 14 }} variant="h5" conponent='div' color="text.primary" gutterBottom>
            {title}
          </Typography>
          <Typography sx={{ mb: 1, fontSize: 12 }} color="text.secondary">
            ${price}
          </Typography>
          <Typography variant="body2">
            <p className='text-[0.5rem] md:text-xs'>{rating}</p>
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant='h5' sx={{ fontSize: 10, backgroundColor: '#febd69' }} className='hover:bg-[#cd9042]' onClick={addToBasket}>Add to Basket</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Row4;