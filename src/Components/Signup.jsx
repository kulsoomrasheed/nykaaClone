'use client'
import { Box ,Checkbox,
    Flex,
    Text,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Image,
    Button,} from '@chakra-ui/react'
import React, { useState } from 'react'
import Border from './Border'
import Top from './Top'
import Nav from './Nav'
import Footer from './Footer'
import {useDispatch} from "react-redux"
import login, { signup } from './redux/Auth/action'
const Signup = () => {
    const [email,setemail]= useState("")
    const [pass,setpass]= useState("")
const dispatch=useDispatch()
    const obj={
      email,pass
    }
    const handleclick=()=>{
      console.log(obj);
      setemail("")
      setpass("")
      dispatch(signup(obj))
     alert("Registered successfully!")
    }

  return (
    <Box  width={"100%"} margin={"auto"}>
    <Border/>
        <Top />
        <Border/>
  
        <Nav />
        <Stack borderRadius={6} h={'400'} minH={'75vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} margin={10} flex={1} align={'center'}  justifyContent={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading color={'#e80071'} margin={'auto'} mb={5} fontSize={'4xl'}>Sign up to your account</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email"  onChange={(e)=>setemail(e.target.value)} />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" onChange={(e)=>setpass(e.target.value)}/>
          </FormControl>
          <Stack spacing={3}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'center'}
              justify={'space-between'}>
            </Stack>
            <Button onClick={handleclick} bgColor={'#e80071'} colorScheme={'pink'} variant={'solid'}>
              Sign up
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
        width={'60%'}
        borderRadius={9} margin={10}  
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://i.pinimg.com/564x/e7/8d/f2/e78df236fb8ec38e2bff032e54792907.jpg'
          }
        />
      </Flex>
    </Stack>
        <Footer/>
  </Box>
  )
}

export default Signup

