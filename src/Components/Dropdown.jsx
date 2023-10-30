import {  Link, ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";
const Dropdown = () => {
  return (
    <div>
      <nav className="dropdownmenu">
        <UnorderedList p={0} m={0} bgColor={'#535c67 ' } listStyleType={"none"} width={'100%'}>
          < ListItem float={"left"} position={'relative'} width={'auto'} p={0} m={0} ><Link color={'white'} transition={'all 0.25s ease'} display={'block'} bgColor={'pink.200'}>makeup</Link></ ListItem>
          < ListItem p={0} m={0} ><Link color={'white'} transition={'all 0.25s ease'} display={'block'} bgColor={'pink.200'}>makeup</Link></ ListItem>
          < ListItem p={0} m={0} >
            <Link color={'white'} transition={'all 0.25s ease'} display={'block'} bgColor={'pink.200'}>makeup</Link>
            <UnorderedList p={0} m={0}  id="submenu"bgColor={'#535c67 ' } listStyleType={"none"} width={'100%'} >
            < ListItem p={0} m={0} ><Link color={'white'} transition={'all 0.25s ease'} display={'block'} bgColor={'pink.200'}>makeup</Link></ ListItem>
            < ListItem p={0} m={0} ><Link color={'white'} transition={'all 0.25s ease'} display={'block'} bgColor={'pink.200'}>makeup</Link></ ListItem>
            < ListItem p={0} m={0} ><Link color={'white'} transition={'all 0.25s ease'} display={'block'} bgColor={'pink.200'}>makeup</Link></ ListItem>

            </UnorderedList>
          </ ListItem>
          < ListItem p={0} m={0} ><Link color={'white'} transition={'all 0.25s ease'} display={'block'} bgColor={'pink.200'}>makeup</Link></ ListItem>
          < ListItem p={0} m={0} ><Link color={'white'} transition={'all 0.25s ease'} display={'block'} bgColor={'pink.200'}>makeup</Link></ ListItem>

        </UnorderedList>
      </nav>
    </div>
  );
};

export default Dropdown;
