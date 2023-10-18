'use client'

import { Box, Button, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Border from './Border'
import Top from './Top'
import Nav from './Nav'
import Footer from './Footer'
import { Navigate, useNavigate } from 'react-router-dom'
const NotFound = () => {
    const navigate= useNavigate()
  return (
    <Box  width={"100%"} margin={"auto"}>
    <Border/>
        <Top />
        <Border/>
  
        <Nav />
        <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, red.400, purple.600)"
        backgroundClip="text">
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={'gray.500'} mb={6}>
        The page you&apos;re looking for does not seem to exist
      </Text>

      <Button
      onClick={()=>navigate("/")}
        colorScheme="pink"
        bgGradient="linear(to-r, red.400, pink.500, purple.600)"
        color="white"
        variant="solid">
        Go to Home
      </Button>
    </Box>
        <Footer/>
  </Box>
  )
}

export default NotFound
