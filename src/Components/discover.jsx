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
import { category, radar } from "../data/TopBrands";
  

    
   
  
  const Discover = () => {
    return (
      <div style={{ width: "94%", margin: "auto", textAlign: "left" }}>
        <Grid
          width={"100%"}
          templateColumns={{base : "repeat(3, 1fr)", md : "repeat(4, 1fr)", lg : "repeat(8, 1fr)"}}
         
          margin={"auto"}
        >
          {category.map((el, i) => {
            return (
              <Card  borderRadius={6} alignItems={'center'}       justifyContent={'center'}>
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
                  
                  </Stack>
                </CardBody>
              </Card>
            );
          })}
        </Grid>
      </div>
    );
  };
  
  export default Discover;
  