import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide ,Breakpoints} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import topBrands, { actualJustDropped, justDropped } from "../data/TopBrands"
import "../App.css";

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
          slidesPerView: 6,
        },
      };

      
  return (

    <Box 
    width={"97%"}
    margin={5}>
      <Heading fontSize={'2xl'} mt={10} textAlign={'left'} ml={6} bgGradient="linear(to-r, red.400, purple.600)"
        backgroundClip="text">
Hot List

</Heading><Heading fontSize={'md'} mb={4} textAlign={'left'} ml={6}>Nykaa’s Super Sellers

</Heading>
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
  breakpoints={breakpoints} 
>

{actualJustDropped.map((el,i)=>{
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
<a href="/nykaaNaturals">View All
</a>
</Heading>
    </Box>
  );
}
  
export default JustDroppedProducts