import React from 'react';
import "../App.css"
import { ArrowRightIcon } from '@chakra-ui/icons';
const CustomArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow" onClick={onClick}>
      
<ArrowRightIcon/>    </div>
  );
};

export default CustomArrow;
