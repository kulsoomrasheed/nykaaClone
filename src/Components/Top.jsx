import { Box, Center } from '@chakra-ui/react';
import React from 'react';

const Top = () => {
  return (
    <Box width={"100%"}>
       <Center
      w='100%'
      h='35px'
      className='top'
      style={{
        background: 'linear-gradient(to left, #FF69B4, #FF1493, #fafe21)',
        animation: 'moveText 20s linear infinite, glowText 1.5s ease-in-out infinite, colorChange 10s linear alternate infinite',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontSize: '1em',
        fontWeight: 'bold',
        letterSpacing: '2px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <span style={{ color: '#e80071' ,marginRight:10}}>
       ✨ GRAND FESTIVE SALE
      </span>{' '}
      <span style={{ color: '#e80071' }}>
        Festive Deals You Can't Miss! ✨
      </span>
    </Center>
    </Box>
   
  );
};

export default Top;
