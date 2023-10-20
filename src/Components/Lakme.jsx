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
import { lakme, lakmeCar, lakmeCat } from "../data/TopBrands";
import Customcrsl from "./CustomCrsl";
import Products from "./Products";
import Sidebar from "./Sidebar";

const Lakme = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");

  const dispatch = useDispatch();
  const obj = {
    email,
    pass,
  };
  const handleclick = () => {
    console.log(obj);
    dispatch(login(obj))
      .then((res) => {
        setemail("");
        setpass("");
        navigate("/");
      })
      .catch((err) => {
        alert("Login again");
      });
  };

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

  </Box>
</Box>
<Customcrsl data={lakmeCat} num={'15'}/>
<Flex  alignContent={"flex-start"}  w={'80%'} margin={'auto'}>
  <Sidebar/>
<Products data={lakme}/>
</Flex>
      <Footer />
    </Box>
  );
};

export default Lakme;
/*
    <iframe
      style={{ display: 'block', margin: 'auto',borderRadius:9,boxShadow:6 }}
      width="100%"
      height="720"
      src="https://www.youtube.com/embed/qIJcl2go_S4?autoplay=1&loop=infinity"
      title="Lakmé Blush and Glow Sheet Mask"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
    */