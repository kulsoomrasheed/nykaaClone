import {
  Badge,
  Box,
  Card,
  CardBody,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const images = [
 {
    img: "https://images-static.nykaa.com/uploads/b03f2a8c-2569-4e97-82e7-bd4c52225c17.jpg?tr=w-150,cm-pad_resize",
    name:'Candles'
 },
 
 {
    img:
    "https://images-static.nykaa.com/uploads/7f30da73-e647-412c-90b9-8e57c539a1dc.jpg?tr=w-150,cm-pad_resize",
    name:"Body Mists"
 },
 {
    img: "https://images-static.nykaa.com/uploads/3599bb63-aa8c-4d7d-9684-6ee186fdca1d.jpg?tr=w-150,cm-pad_resize",
    name:"Essential Oils"
 },
 {
    img:"https://images-static.nykaa.com/uploads/1c0744ef-f265-41a4-814b-14c1dd5c1741.jpg?tr=w-150,cm-pad_resize",
    name:"Bath Salts"
 },
 {
    img:"https://images-static.nykaa.com/uploads/9d3c7e7d-56f0-4c50-a45b-00d2d2ba77dc.jpg?tr=w-150,cm-pad_resize",
    name:"Massage Oils"
 },
 {
    img:"https://images-static.nykaa.com/uploads/cd72bae9-630d-4ef1-a6c6-51b5b47cef54.jpg?tr=w-150,cm-pad_resize",
    name:"Scrubs"
 },
  
 {
    img:"https://images-static.nykaa.com/uploads/60c8a181-a669-4988-b9f8-fa59540119c6.jpg?tr=w-150,cm-pad_resize",
    name:"Foot Care"
 }, 
  
 
];
const Spotliight = () => {
  return (
    <div style={{ width: "94%", margin: "auto", textAlign: "left" }}>
      <Heading size={"md"} mt={5}>
        In The Spotlight
      </Heading>
      <Text mb={2}>Self-Care Essentials</Text>
      <Stack position="relative">
        <Image
          borderRadius={6}
          src="https://images-static.nykaa.com/uploads/da2f92c4-5065-4b0c-889b-9d66e9b9a870.jpg?tr=w-1200,cm-pad_resize"
          alt="Sunscreens"
        />
        <Stack position="absolute" bottom="0" left="0" padding="1" ml={1}>
          <Heading fontSize={20} color="white">
            Upto 30% Off
          </Heading>
          <Text color="white">On Must Haves</Text>
        </Stack>
      </Stack>
      <Grid
        width={"100%"}
        templateColumns={{base : "repeat(1, 1fr)", md : "repeat(3, 1fr)", lg : "repeat(7, 1fr)"}}
        gap={2}
        margin={"auto"}
        justifyContent={'center'}
      >
        {images.map((el, i) => {
          return (
            <Card maxW="2xl" borderRadius={6}  alignItems={'center'}       justifyContent={'center'}
            >
              <CardBody>
                <Image
                  src={el.img}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack
                  alignItems={"center"}
                  alignContent={"center"}
                  mt="3"
                  spacing="1"
                >
                  <Heading size={"xs"}>{el.name}</Heading>
                  <Text></Text>
                  <Badge colorScheme="pink"></Badge>
                </Stack>
              </CardBody>
            </Card>
          );
        })}
      </Grid>
    </div>
  );
};

export default Spotliight;
