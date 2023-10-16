import { Box, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Sos = () => {
  return (
    <div style={{width:"94%",margin:'auto' , textAlign:"left"}}>
    <Heading size={"lg"}  margin={3} mt={5} >Save On Sunscreens</Heading>
    <Stack position="relative">
      <Image
        src="https://images-static.nykaa.com/uploads/10e573c1-d743-4b35-992b-88e73ec56603.jpg?tr=w-1200,cm-pad_resize"
        alt="Sunscreens"
      />
      <Stack
        position="absolute"
        bottom="0"
        left="0"
        padding="1" ml={1}
      >
        <Heading fontSize={20} color="white">Upto 30% Off</Heading>
        <Text color="white">On Must Haves</Text>
      </Stack>
    </Stack>
    <Grid templateColumns='repeat(5, 1fr)' paddingTop={2}  marginTop={5} >
<GridItem> <img src="https://images-static.nykaa.com/uploads/cba3534d-32b7-4596-80e0-df8393308087.jpg?tr=w-150,cm-pad_resize" alt="" /></GridItem>
<GridItem><img src="https://images-static.nykaa.com/uploads/c1f46c79-70c2-4961-b743-8f7323135081.jpg?tr=w-150,cm-pad_resize" alt="" /></GridItem>
<GridItem><img src="https://images-static.nykaa.com/uploads/d9b1ab62-a6b3-4f93-bdcd-8692baa4fdb0.jpg?tr=w-150,cm-pad_resize" alt="" /></GridItem>
<GridItem><img src="https://images-static.nykaa.com/uploads/c7bebc0f-872d-4e09-892f-16231e693def.jpg?tr=w-150,cm-pad_resize" alt="" /></GridItem>
<GridItem><img src="https://images-static.nykaa.com/uploads/c2792382-0715-490f-94a5-0777efe5ac1d.jpg?tr=w-150,cm-pad_resize" alt="" /></GridItem>

    </Grid>
    <Image marginTop={10} width={"100%"}  src="https://images-static.nykaa.com/uploads/edd0a1a7-018e-461e-9455-dd72bd5a07c2.jpg?tr=w-1200,cm-pad_resize" alt="" />
   
  </div>
  )
}

export default Sos