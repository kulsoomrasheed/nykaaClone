import { StarIcon } from "@chakra-ui/icons"
import { Alert, AlertDialog, Badge, Box, Button, Flex, Grid, Image, Text } from "@chakra-ui/react"
import { lakme, lakmeCat } from "../data/TopBrands"
import { useNavigate } from "react-router-dom"
import Cartalert from "./Cartalert"

 const Products=({data})=> {
    
  const navigate = useNavigate()
    return (
    <Grid
    width={"65%"}
    templateColumns={{base : "repeat(2, 1fr)", md : "repeat(2, 1fr)", lg : "repeat(3, 1fr)"}}
    gap={2}
    margin={"auto"}
    justifyContent={'center'}
    alignContent={'center'}
    alignItems={'center'}
  >
        {data.map((el,i)=>{
            return   <Box  justifyContent={'center'} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Badge borderRadius='full' px='2' colorScheme='pink'>
                 {el.featured}
               </Badge>
               <Badge borderRadius='full' px='2' colorScheme='teal'>
                 {el.best}
               </Badge>
           <Image width={'100%'} justifyContent={'center'} src={el.img}  />
     
           <Box p='6'>
             <Box display='flex' alignItems='baseline'>
              
               <Box
                 color='gray.500'
                 fontWeight='semibold'
                 letterSpacing='wide'
                 fontSize='xs'
                 textTransform='uppercase'
                 ml='2'
               >
                  {el.shades} &bull;
               </Box>
             </Box>
     
             <Box
               mt='1'
               fontWeight='semibold'
               as='h4'
               lineHeight='tight'
               noOfLines={1}
             >
               {el.name}
             </Box>
     
             <Box>
             <Text textDecoration={"line-through"} >MRP:{el.mrp}</Text>  {el.price}
               <Box as='span' color='green.300' fontSize='sm'>
                 / {el.offer}
               </Box>
             </Box>
     
             <Box display='flex' mt='2' alignItems='center'  justifyContent={'center'}>
               
               <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                 {el.qty }
               </Box>
             </Box>
            <Flex justifyContent={'center'}> <Button
             margin={1}
                variant={"solid"}
                padding={2}
                color={'#e80071'}
                fontSize={'md'}>
        💖
              </Button>
              <Button 
             margin={1}
                bgColor={"#e80071"}
                colorScheme={"pink"}
                variant={"solid"}
                padding={2}
                fontSize={'xs'}>
Add to Cart 
       
              </Button></Flex>
           </Box>
         </Box>
        })}
    </Grid>
    )
  }

  export default Products