import { Box, Button, Flex, Image, Input, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SearchIcon } from '@chakra-ui/icons';
import Modall from './Modal';
import Check from './Check';

const Nav = () => {
  const navigate = useNavigate();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      w={'100%'}
      padding={1}
      justifyContent={'center'}
      alignItems={'center'}
      alignContent={'space-evenly'}
      position={isSticky ? 'fixed' : 'relative'}
      top="0"
      zIndex="100"
      backgroundColor="white"
      boxShadow={isSticky ? '0px 4px 4px rgba(0, 0, 0, 0.1)' : 'none'}
      display={{
        base: 'none', // Hide on small screens
        sm: 'none',   // Hide on medium screens
        lg: 'flex',   // Display on large screens
      }}
    >
      <Flex justifyContent="space-evenly" alignItems="center"       gap={8}
>
        <Link to="/">
          <Image
            width="200px"
            src="araish3.png"
            alt="logo"
          />
        </Link>
        <Flex justifyContent="space-evenly" gap={3}>
          <Link to={'/categories'}>
            <Text color={'gray.600'}>
              <b>Categories</b>
            </Text>
          </Link>
          <Link to={'/brands'}>
            <Text color={'gray.600'}>
              <b>Brands</b>
            </Text>
          </Link>
          <Text color={'gray.600'}>
            <b>Luxe</b>
          </Text>
          <Text color={'gray.600'}>
            <b>Araish Fashion</b>
          </Text>
          <Text color={'gray.600'}>
            <b>Beauty Advice</b>
          </Text>
        </Flex>
        <Flex>
          <Input placeholder="Search On Araish" />
          <Button>
            <SearchIcon color={'#e80071'} />
          </Button>
        </Flex>
        <div>
          <Modall
            text={'Sign in'}
            btntext={'Sign in with Email'}
            heading={'Login'}
            label="Register now and get 3000 Araish reward points instantly!"
          />
        </div>
        <Button onClick={()=>navigate("/signup")} bgColor={'#e80071'} colorScheme='pink' color={'white'} fontSize={'sm'}> Sign up</Button>
        <Button onClick={()=>navigate("/wishlist")}  fontSize={'xs'} bgColor={"#e80071"} colorScheme='pink'><Image width={5} src='https://static-00.iconduck.com/assets.00/wishlist-icon-2048x1952-13b2gake.png'/></Button>
      <Check/>
      </Flex>
    </Box>
  );
};

export default Nav;


