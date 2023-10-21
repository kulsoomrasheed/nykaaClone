import React, { useEffect } from "react";
import Nav from "../Components/Nav";
import { Box, Flex, Heading, Image, Modal } from "@chakra-ui/react";
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
import Discover from "../Components/discover";
import Modall from "../Components/Modal";
import axios from "axios";
import CaptionCarousel from "../Components/Check";
import Check from "../Components/Check";
import SwiperCarousal from "../Components/SwiperCarousal";
const data=[
  {
    "img": "https://images-static.nykaa.com/creatives/90b13d57-9dc2-4180-87e7-08a77b94208c/default.jpg?tr=w-400,cm-pad_resize",
    "offer": "Up To 50% Off",
    "description": "Festive Sale is Live!"
  },
  {
    "img": "https://images-static.nykaa.com/creatives/aafc1871-8ad4-461f-8e61-5ec950351fe2/default.jpg?tr=w-400,cm-pad_resize",
    "offer": "25% Off On Bestselling Combo!",
    "description": "Everyday Bond Builders"
  },
  {
    "img": "https://images-static.nykaa.com/creatives/d01fbdc7-6f2a-4911-a42b-4b4a541f0007/default.jpg?tr=w-400,cm-pad_resize",
    "offer": "Upto 35% off",
    "description": "On Bestselling Combos"
  },
  {
    "img": "https://images-static.nykaa.com/creatives/a8435015-fb2f-4538-89bd-0481b631fc5b/default.jpg?tr=w-400,cm-pad_resize",
    "offer": "Upto 35% Off",
    "description": "On Festive Favourites!"
  },
  {
    "img": "https://images-static.nykaa.com/creatives/b2279e38-3621-481a-842f-a26b082e5871/default.jpg?tr=w-400,cm-pad_resize",
    "offer": "Min 40% Off",
    "description": "On Bestsellers"
  },
  {
    "img": "https://images-static.nykaa.com/creatives/55a85f63-b44e-434e-83d8-50e96fc1d6d1/default.jpg?tr=w-400,cm-pad_resize",
    "offer": "Festive Glow-Up Essentials",
    "description": "Shop Now!"
  },
  {
    "img": "https://images-static.nykaa.com/creatives/0e7ff908-c829-4142-a890-451d95e95c7b/default.jpg?tr=w-400,cm-pad_resize",
    "offer": "Buy 2 Get 1 Free*",
    "description": "Limited Time Only!"
  }
]

const Home = () => {
  
  useEffect(()=>{
    axios.get("http://localhost:4000/").then((res)=>{
    console.log(res.data);
}).catch((err)=>{
    console.log(err.message);
})
  },[])
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
      <Carousell data={data} />
      <Image
        borderRadius={6}
        margin={"auto"}
        width={"94%"}
        src="https://images-static.nykaa.com/uploads/29caf64f-11f1-4e6d-a319-72d5c84cefd7.jpg?tr=w-1200,cm-pad_resize"
        alt=""
      />
      <Discover/>
      <Image
        borderRadius={6}
        margin={"auto"}
        width={"94%"}
        marginTop={7}
        src="https://images-static.nykaa.com/uploads/092bdb7d-86a1-45b1-a77e-6c43559a47c4.jpg?tr=w-1200,cm-pad_resize"
        alt=""
      />
     
      <Carousel2/>
      <TopBrands />
      <Flex width={"100%"} bgColor={"#fff2e3"}>
        <Carousel3 />
      </Flex>
      <Sos/>
      
      <JustDroppedProducts />
      <Spotliight/>
      <ActualJustDropped />
      <Radar/>
      <Image w={'94%'} margin={'50px auto'} src="https://images-static.nykaa.com/uploads/49e43a50-37b5-405a-be2d-ab90055115ec.jpg?tr=w-1200,cm-pad_resize"></Image>
      <Heading m={3} ml={4} textAlign={'left'} fontSize={'2xl'}bgGradient="linear(to-r, red.400, purple.600)"
        backgroundClip="text">Nykaa - The Online Beauty Store</Heading>
      <Footer/>
     
    </Box>
  );
};

export default Home;
