import { Badge, Button, ButtonGroup, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
const Cards = ({name,img ,price, offer,best}) => {
  return (
    <div>
      <Card h={350} maxW='xl' borderRadius={6}>
  <CardBody>
  <Badge colorScheme='green'>{best}</Badge>

    <Image
    
      src={img}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack alignItems={'center'}  alignContent={'center'} mt='3' spacing='1'>
      <Heading size={'xs'}>
        {name}
      </Heading>
    <Text>{price}</Text>
    <Badge colorScheme='pink'>{offer}</Badge>

    </Stack>
  </CardBody>

</Card>
        </div>
  )
}

export default Cards

// color={'#e80071'}