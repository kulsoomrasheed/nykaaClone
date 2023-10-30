import { Badge, Box, Button, ButtonGroup, Divider, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
const Cards = ({name,img ,price,qty,featured,shades, offer,best}) => {
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
             
            <Flex justifyContent={'center'}> <Button
             margin={1}
                variant={"solid"}
                padding={2}
                color={'#e80071'}
                fontSize={'md'}>
        💖
              </Button>
              <Button  
             margin={1}
                bgColor={"#e80071"}
                colorScheme={"pink"}
                variant={"solid"}
                padding={2}
                fontSize={'x.3s'}>
Add to Cart 
       
              </Button></Flex>
           </Box>
         </Box>
        </div>
  )
}

export default Cards

// color={'#e80071'}