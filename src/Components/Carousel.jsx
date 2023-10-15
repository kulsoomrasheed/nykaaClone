import { Box, Button, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "../App.css"
const Carousell = () => {
  return (
    <Box width={'100%'} margin={'auto'} marginBottom={3} >
 <Carousel
  
    showArrows={true}
    showThumbs={true}
    renderThumbs={() => {}}
    dynamicHeight={false}
    centerMode={true}
    centerSlidePercentage={33.3}
  ><div class="card">
  <img src="https://images-static.nykaa.com/creatives/c7a1b4f7-7749-46ff-b9cc-dd5dd8a5a8b9/default.jpg?tr=w-400,cm-pad_resize" alt="Image 5" />
  <Stack className="legend" padding={10}>  <Text> Best of Korean Skincare</Text>
    <Text>Additional 10% off on 799+</Text></Stack>
  
</div><div class="card">
  <img src="https://images-static.nykaa.com/creatives/18a28711-fb48-4a75-98aa-61a99bf239eb/default.jpg?tr=w-400,cm-pad_resize" alt="Image 5" />
  <Stack className="legend" padding={10}>  <Text> 15% Off</Text>
    <Text>On 3000+: 3 BestSelling Gifts</Text></Stack></div>
    <div class="card">
      <img src="https://images-static.nykaa.com/creatives/5e62ced4-fa95-430e-befa-d72a78c97796/default.jpg?tr=w-400,cm-pad_resize" alt="Image 1" />
      <Stack className="legend" padding={10}>  <Text> On 3500+ : 3 piece Gift-Set</Text>
    <Text>Upto 20% Off on Festive Kits</Text></Stack>
      </div>
    <div class="card" >
      <img src="https://images-static.nykaa.com/creatives/95189f6e-0c13-4359-ba5c-24b6d519ad0c/default.jpg?tr=w-400,cm-pad_resize" alt="Image 2" />
      <p className="legend">Legend 2</p>
    </div>
    <div class="card">
      <img src="https://images-static.nykaa.com/creatives/0fad01ad-e1dc-4ece-a1ca-0e382961126c/default.jpg?tr=w-400,cm-pad_resize" alt="Image 3" />
      <p className="legend">Legend 3</p>
    </div>
    <div class="card">
      <img src="https://images-static.nykaa.com/creatives/95189f6e-0c13-4359-ba5c-24b6d519ad0c/default.jpg?tr=w-400,cm-pad_resize" alt="Image 4" />
      <p className="legend">Legend 4</p>
    </div>
    
    <div class="card">
      <img src="https://images-static.nykaa.com/creatives/d97c3849-12bf-48a1-a8ed-6cc9925fd254/default.jpg?tr=w-400,cm-pad_resize" alt="Image 6" />
      <p className="legend">Legend 6</p>
    </div>
    <div class="card">
      <img src="https://images-static.nykaa.com/creatives/68c7a778-90c8-42ac-bfb3-d83ec7071253/default.jpg?tr=w-400,cm-pad_resize" alt="Image 6" />
      <p className="legend">Legend 6</p>
    </div>
    <div class="card">
      <img src="https://images-static.nykaa.com/creatives/18a28711-fb48-4a75-98aa-61a99bf239eb/default.jpg?tr=w-400,cm-pad_resize" alt="Image 6" />
      <p className="legend">Legend 6</p>
    </div>
  </Carousel>
    </Box>
   
  )
}

export default Carousell