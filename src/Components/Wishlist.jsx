import React from 'react'
import Products from './Products'
import { justDropped } from '../data/TopBrands'
import { Box, Heading } from '@chakra-ui/react'
import Border from './Border'
import Top from './Top'
import Nav from './Nav'
import Navbar from './Navbar'
import Footer from './Footer'

const Wishlist = () => {
  return (
    <div>
        <Box  width={"100%"} margin={"auto"}>
  <Border/>
      <Top />
      <Border/>

      <Nav />
      <Navbar/>


    
        <Heading size={"2xl"} m={5} bgGradient="linear(to-r, red.400, purple.600)"
        backgroundClip="text">My Wishlist (3)</Heading>
        <Products data={justDropped}/> 
         <Footer/>
</Box>
    </div>
  )
}

export default Wishlist