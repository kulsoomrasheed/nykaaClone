import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import Border from '../Components/Border'
import Top from '../Components/Top'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import Carousell from '../Components/Carousel'
import Navbar from '../Components/Navbar'
import TopBrands from '../Components/TopBrands'
import Discover from '../Components/discover'
import Sos from '../Components/Sos'
import ActualJustDropped from '../Components/actualJustDropped'
import Spotliight from '../Components/Spotliight'
import Radar from '../Components/Radar'
import Customcrsl from '../Components/CustomCrsl'
import { lakme } from '../data/TopBrands'
const Categories = () => {
  return (
    <Box  width={"100%"} margin={"auto"}>
  <Border/>
      <Top />
      <Border/>

      <Nav />
      <Navbar/>

      <Image
        marginBottom={7}
        width={"100%"}
        src="https://images-static.nykaa.com/uploads/cee1e080-f836-497a-a7e0-a8dbface08fc.jpg?tr=w-1200,cm-pad_resize"
      ></Image>
       <Image
        borderRadius={6}
        margin={"auto"}
        width={"94%"}
        src="https://images-static.nykaa.com/uploads/29caf64f-11f1-4e6d-a319-72d5c84cefd7.jpg?tr=w-1200,cm-pad_resize"
        alt=""
      />
      <Carousell/>
      <Discover/>
      <TopBrands/>
      <Radar/>

      <Sos/>
      <ActualJustDropped/>
      <Spotliight/>
      <Footer/>
</Box>
  
  )
}

export default Categories