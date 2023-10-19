import { Box, Button, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../App.css";

const Customcrsl = ({ data }) => {
  return (
    <Box width={"97%"} margin={"auto"} marginBottom={3} borderRadius={6}>
      <Carousel
        showArrows={true}
        showThumbs={true}
        renderThumbs={() => {}}
        dynamicHeight={false}
        centerMode={true}
        centerSlidePercentage={33.3}
      >
        <div class="card">
          <img src={data[0].img} alt="Image 5" />
          <Stack className="legend" padding={10} fontSize={"lg"}>
            {" "}
          </Stack>
        </div>
        <div class="card">
          <img src={data[5].img} alt="Image 5" />
          <Stack className="legend" padding={10}>
            {" "}
          </Stack>
        </div>
        <div class="card">
          <img src={data[4].img} alt="Image 1" />
          <Stack className="legend" padding={10}>
            {" "}
          </Stack>
        </div>
        <div class="card">
          <img src={data[6].img} alt="Image 2" />
          <Stack className="legend" padding={10}>
            {" "}
          </Stack>{" "}
        </div>
        <div class="card">
          <img src={data[1].img} alt="Image 3" />
          <Stack className="legend" padding={10}>
            {" "}
          </Stack>{" "}
        </div>
        <div class="card">
          <img src={data[2].img} alt="Image 4" />
          <Stack className="legend" padding={10}>
            {" "}
          </Stack>{" "}
        </div>

        <div class="card">
          <img src={data[3].img} alt="Image 6" />
          <Stack className="legend" padding={10}>
            {" "}
          </Stack>{" "}
        </div>
      </Carousel>
    </Box>
  );
};

export default Customcrsl;
