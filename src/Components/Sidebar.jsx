import { Box, Select, Stack } from '@chakra-ui/react'
import React from 'react'
import { sidebar } from '../data/TopBrands'

const Sidebar = () => {
  return (
    <Box width={"25%"} marginX={'auto'}>
      <Stack mb={10} ><Select variant='outline'  placeholder='Sort By : Popularity' >
    
        </Select></Stack>
      {sidebar.map((el,i)=>{
        return   <Stack spacing={3}>
        <Select variant='outline' placeholder={el.title} />
      </Stack>
      })}
        </Box>
  )
}

export default Sidebar