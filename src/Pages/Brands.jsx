import { Box } from '@chakra-ui/react'
import React from 'react'
import Border from '../Components/Border'
import Top from '../Components/Top'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
const Brands = () => {
  return (
    <Box  width={"100%"} margin={"auto"}>
  <Border/>
      <Top />
      <Border/>

      <Nav />
      Brands
      <Footer/>
</Box>
  
  )
}

export default Brands