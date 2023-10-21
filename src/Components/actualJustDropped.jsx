import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide ,Breakpoints} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import topBrands, { actualJustDropped, justDropped } from "../data/TopBrands"
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
    </Box>
  );
}
  
export default JustDroppedProducts