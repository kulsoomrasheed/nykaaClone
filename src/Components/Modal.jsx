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
export const Modall = ({heading,label,btntext,text}) => {
  return (
    <Popover >
  <PopoverTrigger>
    <Button fontSize={'sm'} bgColor={'#e80071'} color={'white'}>{text}</Button>
  </PopoverTrigger>
  <Portal>
    <PopoverContent textAlign={'center'}>
      <PopoverArrow />
      <PopoverHeader ><b>{heading}</b></PopoverHeader>
      <p>{label}</p>
      <PopoverCloseButton />
      <PopoverBody>
        <Button bgColor='#e80071' color={'white'}>{btntext}</Button>
        
      </PopoverBody>
    </PopoverContent>
  </Portal>
</Popover>
  )
}

export default Modall
