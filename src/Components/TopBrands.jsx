import React from 'react'
import { topBrands } from '../data/TopBrands'
import { Box, Grid, Heading, Image, Text } from '@chakra-ui/react'
import TopBrandsCard from './TopBrandsCard'
const TopBrands = () => {
  return (
    <Box margin={'auto'} marginY={5}>
         <Heading textAlign={'left'} ml={12} mb={5} size={"lg"} mt={10}   bgGradient="linear(to-r, red.400, purple.600)"
        backgroundClip="text">
        Explore Our Top Brands
        </Heading>

<Grid width={'94%'} 
          templateColumns={{base : "repeat(1, 1fr)", md : "repeat(1, 1fr)", lg : "repeat(3, 1fr)"}}
          gap={2} margin={'auto'}
          height={'auto'}
          alignItems={'center'}   alignContent={'center'}    justifyContent={'center'}
          >
    
        {topBrands.map((el,i)=>{
return <TopBrandsCard {...el}/>
        })}
    </Grid>
    </Box>

  )
}

export default TopBrands