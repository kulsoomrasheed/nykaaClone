import { Box, Center } from '@chakra-ui/react';
import React from 'react';

const Top = () => {
  return (
    <Center
      w='100%'
      h='35px'
      className='top'
      style={{
        background: 'linear-gradient(to left, #fea12b, #fe4980, #e7422e)',
        animation: 'slideText 5s linear infinite, glowText 1.5s ease-in-out infinite',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      GRAND FESTIVE SALE Festive Deals You Can't Miss!
    </Center>
  );
};

export default Top;
