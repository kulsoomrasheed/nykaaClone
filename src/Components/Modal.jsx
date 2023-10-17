import React from 'react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Button,
    Portal,
  } from '@chakra-ui/react'
export const Modall = () => {
  return (
    <Popover>
  <PopoverTrigger>
    <Button bgColor={'#e80071'} color={'white'}>Sign in</Button>
  </PopoverTrigger>
  <Portal>
    <PopoverContent textAlign={'center'}>
      <PopoverArrow />
      <PopoverHeader ><b>Login / Create Account</b></PopoverHeader>
      <p>Register now and get 2000 Nykaa reward points instantly!</p>
      <PopoverCloseButton />
      <PopoverBody>
        <Button bgColor='#e80071' color={'white'}>Sign in with Email</Button>
      </PopoverBody>
    </PopoverContent>
  </Portal>
</Popover>
  )
}

export default Modall
