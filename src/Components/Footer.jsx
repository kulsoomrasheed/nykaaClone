'use client'

import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Image,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'

const Logo = (props) => {
  return (
    <Image 
    w={20}
    ml={20}
      src="https://o.remove.bg/downloads/14f0b66e-1912-44c2-98d1-068d8ecf48fb/download-removebg-preview.png"
      alt="Logo"
      {...props}
    />
  )
}

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}


export default function LargeWithNewsletter() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container bgColor={'#3a4047'} color={'white'} as={Stack} maxW={'8xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <Text fontSize={'sm'}>© 2022 Chakra Templates. All rights reserved</Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack  align={'flex-start'}>
            <ListHeader>Help</ListHeader>
            <Box className='boxes' as="a" href={'#'}>
              Contact us
            </Box>
            <Box className='boxes' as="a" href={'#'}>
              Frequently Asked Questions
            </Box>
            <Box className='boxes' as="a" href={'#'}>
Store Locator            </Box>
            <Box className='boxes' as="a" href={'#'}>
Cancellations & Return            </Box>
            <Box className='boxes' as="a" href={'#'}>
Shipping & Delivery            </Box>
<Box className='boxes' as="a" href={'#'}>
Sell on Nykaa          </Box>

          </Stack>
          <Stack align={'flex'}>
            <ListHeader>Who are we?</ListHeader>
            <Box className='boxes' as="a" href={'#'}>
Careers            </Box>
            <Box className='boxes' as="a" href={'#'}>
Authenticity            </Box>
            <Box className='boxes' as="a" href={'#'}>
              Press
            </Box>
            <Box className='boxes' as="a" href={'#'}>
Testimonials            </Box>
            <Box className='boxes' as="a" href={'#'}>
              Nykaa CSR
            </Box>
            <Box className='boxes' as="a" href={'#'}>
              Responsible Disclosures
            </Box><Box className='boxes' as="a" href={'#'}>
              Investor Relations
            </Box><Box className='boxes' as="a" href={'#'}>
              Link to Smart ODR
            </Box>
          </Stack>
          <Stack align={'flex'}>
            <ListHeader>Top Categories</ListHeader>
            <Box className='boxes' as="a" href={'#'}>
            Makeup
            </Box>
            <Box className='boxes' as="a" href={'#'}>
              Skin
            </Box>
            <Box className='boxes' as="a" href={'#'}>
Bath & Body            </Box>
            <Box className='boxes' as="a" href={'#'}>
Hair            </Box>
            <Box className='boxes' as="a" href={'#'}>
Appliances            </Box>
<Box className='boxes' as="a" href={'#'}>
            Mom & Baby
            </Box>
            <Box className='boxes' as="a" href={'#'}>
Health & Wellness            </Box>
            <Box className='boxes' as="a" href={'#'}>
Fragrances            </Box>
            <Box className='boxes' as="a" href={'#'}>
              Luxe
            </Box>
          </Stack>
          
        </SimpleGrid>
      </Container>
    </Box>
  )
}