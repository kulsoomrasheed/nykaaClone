import { Button, ButtonGroup, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
const TopBrandsCard = ({name,img,description , offer}) => {
  return (
    <div>
      <Card maxW='lg' borderRadius={6}>
  <CardBody>
    <Image
      src={img}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='3' spacing='1'>
      <Heading size='md' color={'#e80071'}>{offer}</Heading>
      <Text>
        {description}
      </Text>
    
    </Stack>
  </CardBody>

</Card>
        </div>
  )
}

export default TopBrandsCard