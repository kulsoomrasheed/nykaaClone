import React, { useEffect, useState } from 'react'
import Products from './Products'
import { justDropped } from '../data/TopBrands'
import { Box, Heading, Spinner } from '@chakra-ui/react'
import Border from './Border'
import Top from './Top'
import Nav from './Nav'
import Navbar from './Navbar'
import Footer from './Footer'
import axios from 'axios'

const Wishlist = () => {
  const[ data, setData]= useState([])
  const[ load, setload]= useState(false   )


  useEffect(()=>{
   fetchData()
  },[])

   const fetchData=()=>{
    setload(true)
     axios.get("https://nykaa-server-wg8d.onrender.com/nykaa/wishlist").then((res)=>{
       console.log(res.data.msg);
       setData(res.data.msg);
       setload(false)
     }).catch((err)=>{
       console.log(err.message);
       setload(false)

     })
    }
  return (
    <div>
        <Box  width={"100%"} margin={"auto"}>
  <Border/>
      <Top />
      <Border/>

      <Nav />
      <Navbar/>


    
        <Heading size={"2xl"} m={5} bgGradient="linear(to-r, red.400, purple.600)"
        backgroundClip="text">My Wishlist ({data?.length})</Heading>
        {load?<Spinner size={'xl'} color='purple'/>:<Products data={data}/> }
         <Footer/>
</Box>
    </div>
  )
}

export default Wishlist