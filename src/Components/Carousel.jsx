import { Box, Button, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "../App.css"

const data=[
  {
    "img": "https://images-static.nykaa.com/creatives/90b13d57-9dc2-4180-87e7-08a77b94208c/default.jpg?tr=w-400,cm-pad_resize",
    "offer": "Up To 50% Off",
    "description": "Festive Sale is Live!"
  },
  {
    "img": "https://images-static.nykaa.com/creatives/aafc1871-8ad4-461f-8e61-5ec950351fe2/default.jpg?tr=w-400,cm-pad_resize",
    "offer": "25% Off On Bestselling Combo!",
    "description": "Everyday Bond Builders"
  },
  {
    "img": "https://images-static.nykaa.com/creatives/d01fbdc7-6f2a-4911-a42b-4b4a541f0007/default.jpg?tr=w-400,cm-pad_resize",
    "offer": "Upto 35% off",
    "description": "On Bestselling Combos"
  },
  {
    "img": "https://images-static.nykaa.com/creatives/a8435015-fb2f-4538-89bd-0481b631fc5b/default.jpg?tr=w-400,cm-pad_resize",
    "offer": "Upto 35% Off",
    "description": "On Festive Favourites!"
  },
  {
    "img": "https://images-static.nykaa.com/creatives/b2279e38-3621-481a-842f-a26b082e5871/default.jpg?tr=w-400,cm-pad_resize",
    "offer": "Min 40% Off",
    "description": "On Bestsellers"
  },
  {
    "img": "https://images-static.nykaa.com/creatives/55a85f63-b44e-434e-83d8-50e96fc1d6d1/default.jpg?tr=w-400,cm-pad_resize",
    "offer": "Festive Glow-Up Essentials",
    "description": "Shop Now!"
  },
  {
    "img": "https://images-static.nykaa.com/creatives/0e7ff908-c829-4142-a890-451d95e95c7b/default.jpg?tr=w-400,cm-pad_resize",
    "offer": "Buy 2 Get 1 Free*",
    "description": "Limited Time Only!"
  }
]
const Carousell = () => {
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