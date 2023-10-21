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
      "img": "https://images-static.nykaa.com/creatives/90b13d57-9dc2-4180-87e7-08a77b94208c/default.jpg?tr=w-400,cm-pad_resize",
      "offer": "Up To 50% Off",
      "description": "Festive Sale is Live!"
    }, {
      "img": "https://images-static.nykaa.com/creatives/55a85f63-b44e-434e-83d8-50e96fc1d6d1/default.jpg?tr=w-400,cm-pad_resize",
      "offer": "Festive Glow-Up Essentials",
      "description": "Shop Now!"
    },
    {
      "img": "https://images-static.nykaa.com/creatives/b2279e38-3621-481a-842f-a26b082e5871/default.jpg?tr=w-400,cm-pad_resize",
      "offer": "Min 40% Off",
      "description": "On Bestsellers"
    },
    {
      "img": "https://images-static.nykaa.com/creatives/0e7ff908-c829-4142-a890-451d95e95c7b/default.jpg?tr=w-400,cm-pad_resize",
      "offer": "Buy 2 Get 1 Free*",
      "description": "Limited Time Only!"
    },
    
    {
      "img": "https://images-static.nykaa.com/creatives/d01fbdc7-6f2a-4911-a42b-4b4a541f0007/default.jpg?tr=w-400,cm-pad_resize",
      "offer": "Upto 35% off",
      "description": "On Bestselling Combos"
    },
    {
      "img": "https://images-static.nykaa.com/creatives/aafc1871-8ad4-461f-8e61-5ec950351fe2/default.jpg?tr=w-400,cm-pad_resize",
      "offer": "25% Off On Bestselling Combo!",
      "description": "Everyday Bond Builders"
    },
    
    {
      "img": "https://images-static.nykaa.com/creatives/a8435015-fb2f-4538-89bd-0481b631fc5b/default.jpg?tr=w-400,cm-pad_resize",
      "offer": "Upto 35% Off",
      "description": "On Festive Favourites!"
    },
    
   
   
  ]
  
export default function SwiperCarousal() {

    const breakpoints = {
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
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
    borderRadius={6}
    position="relative">
 <SwiperSlide>
    <Image  borderRadius={18} src={el.img}></Image>
<Stack
            position="absolute"
            bottom="2"
            left="2"
            borderRadius={9}
            bgColor={"whiteAlpha.500"}
            padding="4"
            ml={1}
          >
            <Heading color={"black"} fontSize={20}>
              {el.offer}{" "}
            </Heading>
            <Text color={"black"}>{el.description}</Text>
          </Stack></SwiperSlide>
    </Box>  
})}        
      </Swiper>
    </Box>
  );
}
