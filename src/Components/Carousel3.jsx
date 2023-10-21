/*import { Box, Button, Heading, Image, Stack, Text } from '@chakra-ui/react';
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
*/
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
      "img": "https://images-static.nykaa.com/uploads/e138e73c-e964-44f5-ba9c-88adfa51c0a0.jpg?tr=w-400,cm-pad_resize",
      "offer": "Up To 50% Off",
      "description": "Festive Sale is Live!"
    }, {
      "img": "https://images-static.nykaa.com/uploads/9eb2f112-c650-4f0d-9cac-68a6f43f3091.jpg?tr=w-400,cm-pad_resize",
      "offer": "Festive Glow-Up Essentials",
      "description": "Shop Now!"
    },
    {
      "img": "https://images-static.nykaa.com/uploads/5a7cf3ca-1816-4f0a-a3e1-5dfc9cfebdc6.jpg?tr=w-400,cm-pad_resize",
      "offer": "Min 40% Off",
      "description": "On Bestsellers"
    },
    {
      "img": "https://images-static.nykaa.com/uploads/85224f74-0ff4-41f3-b8b6-ef9e802c82c1.jpg?tr=w-400,cm-pad_resize",
      "offer": "Buy 2 Get 1 Free*",
      "description": "Limited Time Only!"
    },
    
    {
      "img": "https://images-static.nykaa.com/uploads/dfd4d3d7-1567-4e8c-9203-4bd7b1b112ab.jpg?tr=w-400,cm-pad_resize",
      "offer": "Upto 35% off",
      "description": "On Bestselling Combos"
    },
    
    
   
   
  ]

const  Carousel3=() =>{

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
  
export default Carousel3