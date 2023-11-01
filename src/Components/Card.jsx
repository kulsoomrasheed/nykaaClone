import { Badge, Box, Button, ButtonGroup, Divider, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import axios from 'axios'
import Cartalert from "./Cartalert"
const Cards = ({name,img ,price,qty,featured,shades, offer,best}) => {
  const obj={name,img ,price,qty,featured,shades, offer,best}

  const handleWishlist=(name,img ,price,qty,featured,shades, offer,best)=>{
    // Your code to handle the post data operation
    axios.post("https://nykaa-server-wg8d.onrender.com/nykaa/wishlist",obj).then((res)=>{
      console.log(res.data);
    }).catch((err) => {
console.log(err.message);
    })
  
}
  return (
    <div>
  <Box  justifyContent={'center'} maxW='sm' borderWidth='1px' gap={5} margin={1} borderRadius={10} overflow='hidden'> <Box display='flex' alignItems='baseline'>
              
             
            </Box>
            <Badge borderRadius='full' px='2' colorScheme='pink'>
                 {featured}
               </Badge>
               
               <Badge borderRadius='full' px='2' colorScheme='teal'>
                 {best}
               </Badge>
           <Image width={'100%'} justifyContent={'center'} src={img}  />
     
           <Box p='6'>
            
     
             <Box
               mt='1'
               fontWeight='semibold'
               as='h4'
               lineHeight='tight'
               noOfLines={1}
             >
               {name}
             </Box>
     
             <Box>
             {price}
               <Box as='span' color='green.300' fontSize='sm'>
                 / {offer}
               </Box>
             </Box>
     
             <Box display='flex' mt='2' alignItems='center'  justifyContent={'center'}>
               
               <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                 {qty }
               </Box> 
             </Box><Box as='span' ml='2' color='gray.600' fontSize='sm'>
                 {shades }
               </Box>
             
            <Flex justifyContent={'center'}>
               <Button
             margin={1}
             variant={'outline'}                padding={2}
                color={'#e80071'}
                fontSize={'md'} onClick={()=>handleWishlist(name,img ,price,qty,featured,shades, offer,best)}>
        💖
              </Button>
              <Cartalert title={'Add to Cart '} el={obj}/></Flex>
           </Box>
         </Box>
        </div>
  )
}

export default Cards

// color={'#e80071'}