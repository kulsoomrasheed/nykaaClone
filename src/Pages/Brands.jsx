import { Box } from '@chakra-ui/react'
import React from 'react'
import Border from '../Components/Border'
import Top from '../Components/Top'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import Radar from '../Components/Radar'
import Navbar from '../Components/Navbar'
const Brands = () => {
  return (
    <Box  width={"100%"} margin={"auto"}>
  <Border/>
      <Top />
      <Border/>

      <Nav />
      <Navbar/>

      <Radar/>

      <Footer/>
</Box>
  
  )
}

export default Brands