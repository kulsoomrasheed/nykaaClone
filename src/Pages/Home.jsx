import React from 'react'
import Nav from '../Components/Nav'
import { Box, Image } from '@chakra-ui/react'
import Carousel from '../Components/Carousel'
import Carousell from '../Components/Carousel'
import Top from '../Components/Top'

const Home = () => {
  return (
    <Box width={'100%'} margin={'auto'}>
        <Top/>
        <Nav/>
        <Image width={'100%'} src='https://images-static.nykaa.com/uploads/cee1e080-f836-497a-a7e0-a8dbface08fc.jpg?tr=w-1200,cm-pad_resize'></Image>
        <Carousell/>
        <Image width={'100%'} src="https://images-static.nykaa.com/uploads/29caf64f-11f1-4e6d-a319-72d5c84cefd7.jpg?tr=w-1200,cm-pad_resize" alt="" />
        <Image marginTop={7} width={'100%'} src="https://images-static.nykaa.com/uploads/092bdb7d-86a1-45b1-a77e-6c43559a47c4.jpg?tr=w-1200,cm-pad_resize" alt="" />
        <Image  width={'100%'} src="https://images-static.nykaa.com/uploads/c96c70bb-f22a-490b-9686-bc5adaaee65b.gif?tr=w-1200,cm-pad_resize" alt="" />
        
    </Box>
  )
}

export default Home