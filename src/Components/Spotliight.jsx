import { Box, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Spotliight = () => {
  return (
    <div style={{width:"94%",margin:'auto' , textAlign:"left"}}>
    <Heading size={"md"}  mt={5} >In The Spotlight</Heading>
    <Text mb={2}>Self-Care Essentials</Text>
    <Stack position="relative">
      <Image borderRadius={6}
        src="https://images-static.nykaa.com/uploads/da2f92c4-5065-4b0c-889b-9d66e9b9a870.jpg?tr=w-1200,cm-pad_resize"
        alt="Sunscreens"
      />
      <Stack
        position="absolute"
        bottom="0"
        left="0"
        padding="1" ml={1}
      >
        <Heading fontSize={20} color="white">Upto 30% Off</Heading>
        <Text color="white">On Must Haves</Text>
      </Stack>
    </Stack>
    <Grid templateColumns='repeat(5, 1fr)' textAlign={'center'} paddingTop={2}  marginTop={5} >
<GridItem> <img src="https://images-static.nykaa.com/uploads/b03f2a8c-2569-4e97-82e7-bd4c52225c17.jpg?tr=w-150,cm-pad_resize" alt="" /><Text>Bath Salts</Text></GridItem>
<GridItem><img src="https://images-static.nykaa.com/uploads/cd72bae9-630d-4ef1-a6c6-51b5b47cef54.jpg?tr=w-150,cm-pad_resize" alt="" /></GridItem>
<GridItem><img src="https://images-static.nykaa.com/uploads/3599bb63-aa8c-4d7d-9684-6ee186fdca1d.jpg?tr=w-150,cm-pad_resize" alt="" /></GridItem>
<GridItem><img src="https://images-static.nykaa.com/uploads/1c0744ef-f265-41a4-814b-14c1dd5c1741.jpg?tr=w-150,cm-pad_resize" alt="" /></GridItem>
<GridItem><img src="https://images-static.nykaa.com/uploads/3599bb63-aa8c-4d7d-9684-6ee186fdca1d.jpg?tr=w-150,cm-pad_resize" alt="" /></GridItem>

    </Grid>
   
  </div>
  )
}

export default Spotliight