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
    Spinner,
    Skeleton,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
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
import Navbar from "./Navbar";
import axios from "axios";

const AllProducts = () => {
  const[ data, setData]= useState([])

   useEffect(()=>{
    fetchData()
   },[])

    const fetchData=()=>{
      axios.get("https://nykaa-server-wg8d.onrender.com/nykaa/products").then((res)=>{
        console.log(res.data.msg);
        setData(res.data.msg);
      }).catch((err)=>{
        console.log(err.message);
      })
    }


 

  return (
    <Box  width={"100%"} margin={"auto"}>
      <Border />
      <Top />
      <Border />

      <Nav />
      <Navbar/>

      <Image
        width={"100%"}
        src="https://images-static.nykaa.com/uploads/cee1e080-f836-497a-a7e0-a8dbface08fc.jpg?tr=w-1200,cm-pad_resize"
      ></Image>
      <Box bgColor={'rgb(243, 243, 243)'} margin={'auto'} width="100%">
  <Breadcrumbb a={'Home'} b={'Brands'} c={'Lakme'} link1={"/"} link2={"/brands"} link3={"/lakme"} />
  <Box width={'100%'} margin={'auto'}>
    <Heading mb={5}>Best Lakme Products Online (315)</Heading>
    <Customcrsl data={lakmeCar} num={'28'}/>

  
  </Box>
</Box>
<Customcrsl data={lakmeCat} num={'15'}/>
<Box bgColor={'rgb(243, 243, 243)'}>
<Heading fontSize={'4xl'}  textAlign={'center'}  bgGradient="linear(to-r, red.400, purple.600)"
        backgroundClip="text" margin={5} mt={5}>
All Products (565)

</Heading>
<Box bgColor={'white'} display={'flex'}  w={'80%'} marginX={'auto'}>
  <Sidebar/>
{data?<Products data={data}/>: <Stack>
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' /> <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
</Stack>}
</Box>
</Box>
      <Footer />
    </Box>
  );
};

export default AllProducts;
/*  <iframe
      style={{ display: 'block', margin: 'auto',borderRadius:9,boxShadow:6 }}
      width="1280"
      height="720"
      src="https://www.youtube.com/embed/qIJcl2go_S4?autoplay=1&loop=infinity"
      title="Lakmé Blush and Glow Sheet Mask"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
    */

