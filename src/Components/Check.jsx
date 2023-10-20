import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
    Image,
    Box,
  } from '@chakra-ui/react'
import React from 'react'
function Check() {
        const { isOpen, onOpen, onClose } = useDisclosure()
        const btnRef = React.useRef()
      
        return (
          <>
            <Box ref={btnRef} onClick={onOpen}
            margin={1}
             variant={"solid"}
             padding={2}
             fontSize={'xs'}>
<Image width={'30px'} src="https://cdn-icons-png.flaticon.com/512/879/879760.png" alt="" />            </Box>
            <Drawer
              isOpen={isOpen}
              placement='right'
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Create your account</DrawerHeader>
      
                <DrawerBody>
                  <Input placeholder='Type here...' />
                </DrawerBody>
      
                <DrawerFooter>
                  <Button variant='outline' mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme='blue'>Save</Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </>
        )
      }

  export default Check