import { Box, Button, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "../App.css"
import CustomArrow from './Arrow';
const Carousel3 = () => {
  return (
    <Box width={'94%'} margin={'auto'} marginBottom={3} whiteSpace={5} borderRadius={6}>
            <Heading marginTop={3}  ml={4} size={'lg'} textAlign={'left'}>Unmissable Offers For You</Heading>

 <Carousel

    showArrows={true}
    showThumbs={true}
    renderArrowPrev={(clickHandler) => <CustomArrow onClick={clickHandler} />} renderArrowNext={(clickHandler) => <CustomArrow onClick={clickHandler} />}
    renderThumbs={() => {}}
    dynamicHeight={false}
    centerMode={true}
    centerSlidePercentage={28.57}
  >
    <div  class="card">
  <img src="https://images-static.nykaa.com/uploads/e138e73c-e964-44f5-ba9c-88adfa51c0a0.jpg?tr=w-400,cm-pad_resize" alt="Image 5" />

  
</div><div class="card">
  <img src="https://images-static.nykaa.com/uploads/9eb2f112-c650-4f0d-9cac-68a6f43f3091.jpg?tr=w-400,cm-pad_resize" alt="Image 5" />
</div>
    <div class="card">
      <img src="https://images-static.nykaa.com/uploads/5a7cf3ca-1816-4f0a-a3e1-5dfc9cfebdc6.jpg?tr=w-400,cm-pad_resize" alt="Image 1" />

      </div>
    <div class="card" >
      <img src="https://images-static.nykaa.com/uploads/85224f74-0ff4-41f3-b8b6-ef9e802c82c1.jpg?tr=w-400,cm-pad_resize" alt="Image 2" />
    </div>
    <div class="card">
      <img src="https://images-static.nykaa.com/uploads/dfd4d3d7-1567-4e8c-9203-4bd7b1b112ab.jpg?tr=w-400,cm-pad_resize" alt="Image 3" />
    </div>
    
  </Carousel>
    </Box>
   
  )
}

export default Carousel3