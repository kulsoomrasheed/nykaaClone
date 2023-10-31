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
    templateColumns={{base : "repeat(1, 1fr)", md : "repeat(1, 1fr)", lg : "repeat(3, 1fr)"}}
    gap={2}
    margin={"auto"}
    justifyContent={'center'}
    alignContent={'center'}
    alignItems={'center'}
  >
        {data.map((el,i)=>{
            return   <Box  justifyContent={'center'} maxW='sm' borderWidth='1px' gap={5} margin={1} borderRadius={10} overflow='hidden'> <Box display='flex' alignItems='baseline'>
              
             
            </Box>
            <Badge borderRadius='full' px='2' colorScheme='pink'>
               </Badge>
               
               <Badge borderRadius='full' px='2' colorScheme='teal'>
                 {el.best}
               </Badge>
           <Image width={'100%'} justifyContent={'center'} src={el.img}  />
     
           <Box p='6'>
            
     
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
             ₹{el.price}
               <Box m={2} as='span' color='green.300' fontSize='sm'>
                  {el.offer}
               </Box>
             </Box>
     
             <Box display='flex' mt='2' alignItems='center'  justifyContent={'center'}>
               
               <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                 {el.qty }
               </Box> 
             </Box><Box as='span' ml='2' color='gray.600' fontSize='sm'>
                 {el.shades }
               </Box>
             
            <Flex justifyContent={'center'}> <Button
             margin={1}
                variant={"solid"}
                padding={2}
                color={'#e80071'}
                fontSize={'md'}>
        💖
              </Button>
              
            
       
<Cartalert title={'Add to Cart '} el={el}/></Flex>
           </Box>
         </Box>
        })}
    </Grid>
    )
  }

  export default Products