import React from 'react'
import NavMenu from './HbMenu'
import { Link } from 'react-router-dom'
import { Box, Button, Flex, Image, Input } from '@chakra-ui/react'
import Check from './Check'
import { SearchIcon } from '@chakra-ui/icons'

const Navbar = () => {
  return (
 <Box width={'100%'} margin={'auto'}  display={{
    base: "block", // Hide on small screens
    sm: 'block',   // Hide on medium screens
    lg: 'none',   // Display on large screens
  }}>
       <Flex justifyContent={'space-between'} margin={'auto'} alignContent={'center'} alignItems={'center'}>
        <Flex >
        <NavMenu/>
        <Link to="/"><Image  width='120px' src="araish3.png" alt="logo" /></Link>
        </Flex>
        <Check/>
    </Flex>
    <Flex margin={1} p={1}  borderRadius={12}><Input borderRadius={12} placeholder='Search On Nykaa' />
        <Button> <SearchIcon color={'#e80071'}/></Button></Flex>
 </Box>
  )
}

export default Navbar