import React from 'react';
import "../App.css"
import { ArrowRightIcon } from '@chakra-ui/icons';
const CustomArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow" onClick={onClick}>
      {/* You can use custom arrow icons or text here */}
      
<ArrowRightIcon/>    </div>
  );
};

export default CustomArrow;
