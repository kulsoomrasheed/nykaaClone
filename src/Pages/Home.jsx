import React from "react";
import Nav from "../Components/Nav";
import { Box, Flex, Image } from "@chakra-ui/react";
import Carousel from "../Components/Carousel";
import Carousell from "../Components/Carousel";
import Top from "../Components/Top";
import Carousel2 from "../Components/Carousel2";
import TopBrands from "../Components/TopBrands";
import JustDroppedProducts from "../Components/justDropped";
import ActualJustDropped from "../Components/actualJustDropped";
import Carousel3 from "../Components/Carousel3";
import Sos from "../Components/Sos";
import Spotliight from "../Components/Spotliight";
import Radar from "../Components/Radar";
import Footer from "../Components/Footer";
import Border from "../Components/Border";

const Home = () => {
  return (
    <Box  width={"100%"} margin={"auto"}>
      <Border/>
      <Top />
      <Border/>

      <Nav />
      <Image
        marginBottom={7}
        width={"100%"}
        src="https://images-static.nykaa.com/uploads/cee1e080-f836-497a-a7e0-a8dbface08fc.jpg?tr=w-1200,cm-pad_resize"
      ></Image>
      <Carousell />
      <Image
        borderRadius={6}
        margin={"auto"}
        width={"94%"}
        src="https://images-static.nykaa.com/uploads/29caf64f-11f1-4e6d-a319-72d5c84cefd7.jpg?tr=w-1200,cm-pad_resize"
        alt=""
      />
      <Image
        borderRadius={6}
        margin={"auto"}
        width={"94%"}
        marginTop={7}
        src="https://images-static.nykaa.com/uploads/092bdb7d-86a1-45b1-a77e-6c43559a47c4.jpg?tr=w-1200,cm-pad_resize"
        alt=""
      />
      <Image
        borderRadius={6}
        margin={"auto"}
        width={"94%"}
        src="https://images-static.nykaa.com/uploads/c96c70bb-f22a-490b-9686-bc5adaaee65b.gif?tr=w-1200,cm-pad_resize"
        alt=""
      />
      <Carousel2 />
      <TopBrands />
      <Flex width={"100%"} bgColor={"#fff2e3"}>
        <Carousel3 />
      </Flex>
      <Sos/>
      <JustDroppedProducts />
      <Spotliight/>
      <ActualJustDropped />
      <Radar/>
      <Footer/>
    </Box>
  );
};

export default Home;
