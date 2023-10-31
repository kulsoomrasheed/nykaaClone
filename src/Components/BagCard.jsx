import { DeleteIcon } from '@chakra-ui/icons'
import { Button, Card, CardBody, CardFooter, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'

const BagCard = ({img,name,_id}) => {
  const handleDelete=(id)=>{
      axios.delete(`https://nykaa-server-wg8d.onrender.com/nykaa/cart/${id}`).then((res)=>{
        console.log(res.data.msg);
      }).catch((err)=>{
        console.log(err.message);
      })
    }
  
  return (
<Card size={'xs'}
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit="fill" width={'100%'}
    maxW={{ base: '100%', sm: '200px' }}
    src={img}
    alt='Caffe Latte'
  />

  <Stack alignContent={'center'} alignItems={'center'}  margin={5}>
    <CardBody>
     <Flex> <Heading size='sm'>{name}</Heading>
      <Button variant='ghost' colorScheme='pink' onClick={()=>handleDelete(_id)}>
      <DeleteIcon />
      </Button></Flex>
      <Text py='2'>
        34ml
      </Text>
    </CardBody>

    <CardFooter>
     
    </CardFooter>
  </Stack>

</Card >  )
}

export default BagCard