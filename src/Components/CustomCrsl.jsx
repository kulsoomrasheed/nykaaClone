import { Box, Button, Image, Stack, Text } from "@chakra-ui/react";
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
