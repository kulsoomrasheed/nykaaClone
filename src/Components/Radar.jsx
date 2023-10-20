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
import { radar } from "../data/TopBrands";
import { useNavigate } from "react-router-dom";
  

    
   
  
  const Radar = () => {
    const navigate=useNavigate()
    return (
      <div style={{ width: "94%", margin: "auto", textAlign: "left" }}>
        <Heading size={"md"} mt={5} bgGradient="linear(to-r, red.400, purple.600)"
        backgroundClip="text">
        On Our Radar
        </Heading>
        <Text mb={2}>Self-Care Essentials</Text>
   
        <Grid
          width={"100%"}
          templateColumns={{base : "repeat(1, 1fr)", md : "repeat(1, 1fr)", lg : "repeat(5, 1fr)"}}
          gap={1}
          margin={"auto"}
        >
          {radar.map((el, i) => {
            return (
              <Card  alignItems={'center'}       justifyContent={'center'}
              onClick={()=>navigate(el.link)}

              borderRadius={6}>
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

                  >
                    <Heading color="#e80071" size={"md"}>{el.offer}</Heading>
                    <Text>{el.description}</Text>
                    <Badge ></Badge>
                  </Stack>
                </CardBody>
              </Card>
            );
          })}
        </Grid>
      </div>
    );
  };
  
  export default Radar;
  