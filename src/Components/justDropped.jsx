/*import React from 'react'
import { topBrands } from '../data/TopBrands'
import { Card, Grid, Heading, Image, Text } from '@chakra-ui/react'
import { justDropped } from '../data/TopBrands'
import Cards from './Card'
const JustDroppedProducts = () => {
  return (
    <div>
        <Text fontSize={'2xl'} textAlign={'left'} ml={14}>Just Dropped
</Text><Text  textAlign={'left'} ml={14}>Latest Arrivals From The World's Best Brands
</Text>
<Grid width={'94%'} templateColumns='repeat(3, 1fr)' gap={2} margin={'auto'}>
    
        {justDropped.map((el,i)=>{
return <Cards {...el}/>
        })}
    </Grid>
    </div>

  )
}

export default JustDroppedProducts

import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Cards from './Card'; // Assuming this component exists and is used to render individual cards
import { justDropped } from '../data/TopBrands';
import Border from './Border';

const JustDroppedProducts = () => {
  return (
    <Box width="96%" gap={2} margin="auto" marginTop={5} marginBottom={3} borderRadius={6}>
          
        <Heading fontSize={'2xl'} mt={10} textAlign={'left'} ml={6} bgGradient="linear(to-r, red.400, purple.600)"
        backgroundClip="text">
Hot List

</Heading><Heading fontSize={'md'} mb={4} textAlign={'left'} ml={6}>Nykaa’s Super Sellers

</Heading>
<Heading  color={'pink.500'} fontSize={'2xl'} textAlign={'right'} mr={6}>
<a href="/view">View All
</a>
</Heading>

      <Carousel
        showArrows={true}
        showThumbs={false} // Disable thumbnail previews if you don't need them
        dynamicHeight={false}
        centerMode={true}
        centerSlidePercentage={15}
        
      >
        {justDropped.map((el, i) => (
          <div key={i}>
            <Cards {...el} />
          </div>
        ))}
      </Carousel>

    </Box>
  );
};

export default JustDroppedProducts;
*/

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide ,Breakpoints} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import topBrands, { justDropped } from "../data/TopBrands"
import "../App.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import Cards from "./Card";


  const JustDroppedProducts = () => {

    const breakpoints = {
        320: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 5,
        },
      };

      
  return (

    <Box 
    width={"97%"}
    margin={5}>

    <Swiper
    
  spaceBetween={20}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false
  }}
  pagination={{
    clickable: true
  }}
  navigation={true}
  modules={[Autoplay, Pagination, Navigation]}
  className="mySwiper"
  breakpoints={breakpoints} // Add this line
>

{justDropped.map((el,i)=>{
    return      <Box 
    width={"97%"}
    margin={"auto"}
    marginBottom={3}
   >
 <SwiperSlide>
   <Cards {...el}/>
</SwiperSlide>
    </Box>  
})}        
      </Swiper>
      <Heading  color={'pink.500'} fontSize={'2xl'} textAlign={'right'} mr={6}>
<a href="/view">View All
</a>
</Heading>
    </Box>
  );
}
  
export default JustDroppedProducts