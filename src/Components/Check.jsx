import { ArrowForwardIcon, CheckCircleIcon, ChevronRightIcon, DeleteIcon, InfoOutlineIcon } from '@chakra-ui/icons'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
    Image,
    Box,
    Text,
    Flex,
    Heading,
    Stack,
    VStack,
    StackDivider,
  } from '@chakra-ui/react'
  import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
  import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BagCard from './BagCard'
function Check() {
        const { isOpen, onOpen, onClose } = useDisclosure()
        const btnRef = React.useRef()
        const[ data, setData]= useState([])

   useEffect(()=>{
    fetchData()
   },[])

    const fetchData=()=>{
      axios.get("https://nykaa-server-wg8d.onrender.com/nykaa/cart").then((res)=>{
        console.log(res.data.msg);
        setData(res.data.msg);
      }).catch((err)=>{
        console.log(err.message);
      })
    }
      
        return (
          <div>
            <Box ref={btnRef} onClick={onOpen}
            margin={1}
             variant={"solid"}
             padding={2}
             fontSize={'xs'}>
<Image width={'30px'} src="https://cdn-icons-png.flaticon.com/512/879/879760.png" alt="" />            </Box>
            <Drawer size={'sm'}
            
              isOpen={isOpen}
              placement='right'
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Bag</DrawerHeader>
      
                <DrawerBody>
                 <Flex justifyContent={'space-between'} alignContent={'center'} alignItems={'center'} m={5}> <Text> <CheckCircleIcon color={'green.500'}/> 2000 Reward Points (₹20)</Text>
                  <Button  colorScheme='pink' variant={"outline"}  fontSize={'sm'}>Remove</Button></Flex>
                  <VStack
  divider={<StackDivider borderColor='gray.200' />}
  spacing={4}
  align='stretch'
>
  {data?.map((el,i)=>{
  return  <BagCard {...el}/>

})}
</VStack>
                  
                  <TableContainer fontSize={'xs'} width={'100%'}>
  <Table variant='striped' colorScheme='pink' >
    <TableCaption>Redeem to get a discount on your next <br /> order
Earn 609 Reward Points</TableCaption>
    <Thead>
      <Tr>
        <Th>Price Details</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Bag MRP (1 items)</Td>
        <Td> ₹699</Td>
      </Tr>
      <Tr>
        <Td>Discount <InfoOutlineIcon/> </Td>
        <Td>₹70</Td>
      </Tr>
      <Tr>
        <Td>Shipping <InfoOutlineIcon/></Td>
        <Td>Free</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>You Pay</Th>
        <Th>  ₹609</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
                </DrawerBody>
      
                <DrawerFooter justifyContent={'space-between'}>
                  <Button fontSize={'lg'} variant='outline' mr={3} onClick={onClose} >
                  ₹609 <br />Grand Total
                  </Button>
                  <Button bgColor={'#e80071'} colorScheme='pink' color={'white'} fontSize={'xl'}>Proceed <ArrowForwardIcon/> </Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        )
      }

  export default Check