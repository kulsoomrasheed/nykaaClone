/*import { Box, Button, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "../App.css"
const Carousel2 = () => {
  return (
    <Box width={'94%'} gap={2} margin={'auto'} marginBottom={3} borderRadius={6} >
 <Carousel
  
    showArrows={true}
    showThumbs={true}
    renderThumbs={() => {}}
    dynamicHeight={false}
    centerMode={true}
    centerSlidePercentage={22}
  ><div class="card">
  <img src="https://images-static.nykaa.com/uploads/9d7e5225-1f74-4220-8f45-9ef336b77dae.gif?tr=w-300,cm-pad_resize" alt="Image 5" />
 
  
</div><div class="card">
  <img src="https://images-static.nykaa.com/uploads/456cce4d-0eda-4b5d-b90a-9d20bccb63a6.gif?tr=w-300,cm-pad_resize" alt="Image 5" />
  </div>
    <div class="card">
      <img src="https://images-static.nykaa.com/uploads/a23c60bf-0e28-4f45-8e06-3441cc1c734d.gif?tr=w-300,cm-pad_resize" alt="Image 1" />
     
      </div>
    <div class="card" >
      <img src="https://images-static.nykaa.com/uploads/007f3c83-203e-4c6f-a422-3502d2c51d2a.gif?tr=w-300,cm-pad_resize" alt="Image 2" />
    </div>
    <div class="card">
      <img src="https://images-static.nykaa.com/uploads/7111fd2e-8acf-4a2d-b988-0ba6a78399a7.jpg?tr=w-300,cm-pad_resize" alt="Image 3" />
    </div>
   
  </Carousel>
    </Box>
   
  )
}

export default Carousel2*/

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide ,Breakpoints} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import topBrands from "../data/TopBrands"
import "../App.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
const data=[
    {
      "img": "https://images-static.nykaa.com/uploads/9d7e5225-1f74-4220-8f45-9ef336b77dae.gif?tr=w-300,cm-pad_resize",
      "offer": "Up To 50% Off",
      "description": "Festive Sale is Live!"
    }, {
      "img": "https://images-static.nykaa.com/uploads/456cce4d-0eda-4b5d-b90a-9d20bccb63a6.gif?tr=w-300,cm-pad_resize",
      "offer": "Festive Glow-Up Essentials",
      "description": "Shop Now!"
    },
    {
      "img": "https://images-static.nykaa.com/uploads/a23c60bf-0e28-4f45-8e06-3441cc1c734d.gif?tr=w-300,cm-pad_resize",
      "offer": "Min 40% Off",
      "description": "On Bestsellers"
    },
    {
      "img": "https://images-static.nykaa.com/uploads/007f3c83-203e-4c6f-a422-3502d2c51d2a.gif?tr=w-300,cm-pad_resize",
      "offer": "Buy 2 Get 1 Free*",
      "description": "Limited Time Only!"
    },
    
    {
      "img": "https://images-static.nykaa.com/uploads/7111fd2e-8acf-4a2d-b988-0ba6a78399a7.jpg?tr=w-300,cm-pad_resize",
      "offer": "Upto 35% off",
      "description": "On Bestselling Combos"
    },
    {
      "img": "https://images-static.nykaa.com/uploads/456cce4d-0eda-4b5d-b90a-9d20bccb63a6.gif?tr=w-300,cm-pad_resize",
      "offer": "25% Off On Bestselling Combo!",
      "description": "Everyday Bond Builders"
    },
  
    
   
   
  ]

const  Carousel2=() =>{

    const breakpoints = {
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 4,
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

{data.map((el,i)=>{
    return      <Box 
    width={"97%"}
    margin={"auto"}
    marginBottom={3}
   >
 <SwiperSlide>
    <Image     borderRadius={12}
 src={el.img}></Image>
</SwiperSlide>
    </Box>  
})}        
      </Swiper>
    </Box>
  );
}
  
export default Carousel2