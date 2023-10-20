/*import React from 'react'
import { topBrands } from '../data/TopBrands'
import { Card, Grid, Heading, Image, Text } from '@chakra-ui/react'
import { justDropped } from '../data/TopBrands'
import Cards from './Card'
const JustDroppedProducts = () => {
  return (
    <div>
        <Text fontSize={'2xl'} textAlign={'left'} ml={14}>Just Dropped
</Text><Text  textAlign={'left'} ml={14}>Latest Arrivals From The World's Best Brands
</Text>
<Grid width={'94%'} templateColumns='repeat(3, 1fr)' gap={2} margin={'auto'}>
    
        {justDropped.map((el,i)=>{
return <Cards {...el}/>
        })}
    </Grid>
    </div>

  )
}

export default JustDroppedProducts
*/
import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Cards from './Card'; // Assuming this component exists and is used to render individual cards
import { actualJustDropped } from '../data/TopBrands';

const ActualJustDropped = () => {
  return (
    <Box width="96%" gap={2} margin="auto" marginTop={5} marginBottom={3} borderRadius={6}>
        <Heading fontSize={'2xl'} textAlign={'left'} ml={6} mt={10} bgGradient="linear(to-r, red.400, purple.600)"
        backgroundClip="text">
Hot List

</Heading><Text  textAlign={'left'} ml={6}>Nykaa’s Super Sellers

</Text>
      <Carousel
        showArrows={true}
        showThumbs={false} // Disable thumbnail previews if you don't need them
        dynamicHeight={false}
        centerMode={true}
        centerSlidePercentage={15}
      >
        {actualJustDropped.map((el, i) => (
          <div key={i}>
            <Cards {...el} />
          </div>
        ))}
      </Carousel>
    </Box>
  );
};

export default ActualJustDropped;
