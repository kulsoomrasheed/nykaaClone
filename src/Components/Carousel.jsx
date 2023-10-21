import { Box, Button, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../App.css";

const Carousell = ({ data }) => {
  
  return (
    <Box
      width={"97%"}
      margin={"auto"}
      marginBottom={3}
      borderRadius={6}
      position="relative"
    >
      <Carousel
        showArrows={true}
        showThumbs={true}
        renderThumbs={() => {}}
        dynamicHeight={false}
        centerMode={true}
        centerSlidePercentage={33.3}
      >
        <div class="card">
          <Image borderRadius={12} src={data[0].img} alt="Image 5" />
          <Stack
            position="absolute"
            bottom="2"
            left="2"
            borderRadius={9}
            bgColor={"whiteAlpha.500"}
            padding="4"
            ml={1}
          >
            <Heading color={"black"} fontSize={20}>
              {data[0].offer}{" "}
            </Heading>
            <Text color={"black"}>{data[0].description}</Text>
          </Stack>
        </div>
        <div class="card">
          <a href="/lakme">
            <Image borderRadius={12} src={data[5].img} alt="Image 5" />
          </a>
          <Stack
            position="absolute"
            bottom="2"
            left="2"
            borderRadius={9}
            bgColor={"whiteAlpha.500"}
            padding="4"
            ml={1}
          >
            <Heading color={"black"} fontSize={20}>
              {data[5].offer}{" "}
            </Heading>
            <Text color={"black"}>{data[5].description}</Text>
          </Stack>
        </div>
        <div class="card">
          <Image borderRadius={12} src={data[4].img} alt="Image 1" />
          <Stack
            position="absolute"
            bottom="2"
            left="2"
            borderRadius={9}
            bgColor={"whiteAlpha.500"}
            padding="4"
            ml={1}
          >
            <Heading color={"black"} fontSize={20}>
              {data[4].offer}{" "}
            </Heading>
            <Text color={"black"}>{data[4].description}</Text>
          </Stack>
        </div>
        <div class="card">
          <Image borderRadius={12} src={data[6].img} alt="Image 2" />
          <Stack
            position="absolute"
            bottom="2"
            left="2"
            borderRadius={9}
            bgColor={"whiteAlpha.500"}
            padding="4"
            ml={1}
          >
            <Heading color={"black"} fontSize={20}>
              {data[4].offer}{" "}
            </Heading>
            <Text color={"black"}>{data[4].description}</Text>
          </Stack>{" "}
        </div>
        <div class="card">
          <Image borderRadius={12} src={data[1].img} alt="Image 3" />
          <Stack
            position="absolute"
            bottom="2"
            left="2"
            borderRadius={9}
            bgColor={"whiteAlpha.500"}
            padding="4"
            ml={1}
          >
            <Heading color={"black"} fontSize={20}>
              {data[1].offer}{" "}
            </Heading>
            <Text color={"black"}>{data[1].description}</Text>
          </Stack>
        </div>
        <div class="card">
          <Image borderRadius={12} src={data[2].img} alt="Image 4" />
          <Stack
            position="absolute"
            bottom="2"
            left="2"
            borderRadius={9}
            bgColor={"whiteAlpha.500"}
            padding="4"
            ml={1}
          >
            <Heading color={"black"} fontSize={20}>
              {data[2].offer}{" "}
            </Heading>
            <Text color={"black"}>{data[2].description}</Text>
          </Stack>{" "}
        </div>

        <div class="card">
          <Image borderRadius={9} src={data[3].img} alt="Image 6" />
          <Stack
            position="absolute"
            bottom="2"
            left="2"
            borderRadius={9}
            bgColor={"whiteAlpha.500"}
            padding="4"
            ml={1}
          >
            <Heading color={"black"} fontSize={20}>
              {data[3].offer}{" "}
            </Heading>
            <Text color={"black"}>{data[3].description}</Text>
          </Stack>{" "}
        </div>
      </Carousel>
    </Box>
  );
};

export default Carousell;
