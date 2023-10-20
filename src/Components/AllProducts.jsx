"use client";
import {
  Box,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Button,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    HStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Border from "./Border";
import Top from "./Top";
import Nav from "./Nav";
import Footer from "./Footer";
import { login } from "./redux/Auth/action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Breadcrumbb from "./Breadcrumb";
import { justDropped, lakmeCar, lakmeCat } from "../data/TopBrands";
import Customcrsl from "./CustomCrsl";
import Products from "./Products";
import Sidebar from "./Sidebar";
import Check from "./Check";
import Cartalert from "./Cartalert";

const AllProducts = () => {
 

  return (
    <Box width={"100%"} margin={"auto"}>
      <Border />
      <Top />
      <Border />

      <Nav />
      <Box bgColor={'rgb(243, 243, 243)'} margin={'auto'} width="100%">
  <Breadcrumbb a={'Home'} b={'Brands'} c={'Lakme'} link1={"/"} link2={"/brands"} link3={"/lakme"} />
  <Box width={'100%'} margin={'auto'}>
    <Heading mb={5}>Best Lakme Products Online (315)</Heading>
    <Customcrsl data={lakmeCar} num={'28'}/>

    <iframe
      style={{ display: 'block', margin: 'auto',borderRadius:9,boxShadow:6 }}
      width="1280"
      height="720"
      src="https://www.youtube.com/embed/qIJcl2go_S4?autoplay=1&loop=infinity"
      title="Lakmé Blush and Glow Sheet Mask"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
    
  </Box>
</Box>
<Customcrsl data={lakmeCat} num={'15'}/>
<Box display={'flex'} border = "2px solid red" w={'80%'} marginX={'auto'}>
  <Sidebar/>
<Products data={justDropped}/>
</Box>
      <Footer />
    </Box>
  );
};

export default AllProducts;
