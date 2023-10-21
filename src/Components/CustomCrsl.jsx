/*import { Box, Button, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../App.css";

const Customcrsl = ({ data ,num}) => {
  return (
    <Box width={"97%"} margin={"auto"} marginBottom={3} borderRadius={6}>
      <Carousel
        showArrows={true}
        showThumbs={true}
        renderThumbs={() => {}}
        dynamicHeight={false}
        centerMode={true}
        centerSlidePercentage={num}
      >
        <div  class="card">
          <Image borderRadius={15} src={data[0].img} alt="Image 5" />
        
        </div>
        <div class="card">
          <Image borderRadius={15} src={data[5].img} alt="Image 5" />
         
        </div>
        <div class="card">
          <Image borderRadius={15} src={data[4].img} alt="Image 1" />
        
        </div>
        <div class="card">
          <Image borderRadius={15} src={data[6].img} alt="Image 2" />
          
        </div>
        <div class="card">
          <Image borderRadius={15} src={data[1].img} alt="Image 3" />
        
        </div>
        <div class="card">
          <Image borderRadius={15} src={data[2].img} alt="Image 4" />
        
        </div>

        <div class="card">
          <Image borderRadius={15} src={data[3].img} alt="Image 6" />
         
        </div>
      </Carousel>
    </Box>
  );
};

export default Customcrsl;
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


  const Customcrsl = ({ data ,num}) => {

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
  
export default Customcrsl