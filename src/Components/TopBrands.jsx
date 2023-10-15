import React from 'react'
import { topBrands } from '../data/TopBrands'
import { Grid, Heading, Image, Text } from '@chakra-ui/react'
import TopBrandsCard from './TopBrandsCard'
const TopBrands = () => {
  return (
    <div>
        <Text fontSize={'2xl'} textAlign={'left'} ml={14}>Explore Our Top Brands
</Text>
<Grid width={'94%'} templateColumns='repeat(3, 1fr)' gap={2} margin={'auto'}>
    
        {topBrands.map((el,i)=>{
return <TopBrandsCard {...el}/>
        })}
    </Grid>
    </div>

  )
}

export default TopBrands