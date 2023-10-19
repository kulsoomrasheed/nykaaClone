import { Box, Button, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "../App.css"


const Carousell = ({data}) => {
  return (
    <Box width={'97%'} margin={'auto'} marginBottom={3} borderRadius={6}>
 <Carousel
  
    showArrows={true}
    showThumbs={true}
    renderThumbs={() => {}}
    dynamicHeight={false}
    centerMode={true}
    centerSlidePercentage={33.3}
  ><div class="card">
  <img src={data[0].img} alt="Image 5" />
  <Stack className="legend" padding={10} fontSize={'lg'}>  <Text>{data[0].offer}</Text>
    <Text>{data[0].description}</Text></Stack>
  
</div><div class="card">
  <img src={data[5].img} alt="Image 5" />
  <Stack className="legend" padding={10}>  <Text>{data[5].offer}</Text>
    <Text>{data[5].description}</Text></Stack></div>
    <div class="card">
      <img src={data[4].img} alt="Image 1" />
      <Stack className="legend" padding={10}>  <Text>{data[4].offer}</Text>
    <Text>{data[4].description}</Text></Stack>
      </div>
    <div class="card" >
      <img src={data[6].img} alt="Image 2" />
      <Stack className="legend" padding={10}>  <Text>{data[6].offer}</Text>
    <Text>{data[6].description}</Text></Stack>    </div>
    <div class="card">
      <img src={data[1].img} alt="Image 3" />
      <Stack className="legend" padding={10}>  <Text> {data[1].offer}</Text>
    <Text>{data[1].description}</Text></Stack>    </div>
    <div class="card">
      <img src={data[2].img} alt="Image 4" />
      <Stack className="legend" padding={10}>  <Text>{data[2].offer}</Text>
    <Text>{data[2].description}</Text></Stack>    </div>
    
    <div class="card">
      <img src={data[3].img} alt="Image 6" />
      <Stack className="legend" padding={10}>  <Text> {data[3].offer}</Text>
    <Text>{data[3].description}</Text></Stack>    </div>
  
  </Carousel>
    </Box>
   
  )
}

export default Carousell