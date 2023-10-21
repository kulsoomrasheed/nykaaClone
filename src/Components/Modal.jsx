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
import { useNavigate } from 'react-router-dom'
export const Modall = ({heading,label,btntext,text}) => {
  const navigate=useNavigate()
  const handleClick=()=>{
navigate("/login")
  }
  return (
    <Popover >
  <PopoverTrigger>
    <Button fontSize={'sm'} colorScheme='pink' bgColor={'#e80071'} color={'white'}>{text}</Button>
  </PopoverTrigger>
  <Portal>
    <PopoverContent textAlign={'center'}>
      <PopoverArrow />
      <PopoverHeader ><b>{heading}</b></PopoverHeader>
      <p>{label}</p>
      <PopoverCloseButton />
      <PopoverBody>
        <Button onClick={handleClick} bgColor='#e80071' colorScheme='pink'  color={'white'}>{btntext}</Button>
        
      </PopoverBody>
    </PopoverContent>
  </Portal>
</Popover>
  )
}

export default Modall
