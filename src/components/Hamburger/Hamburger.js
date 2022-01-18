import React from 'react';
import { Box } from '@chakra-ui/react';
import { MdMenu } from 'react-icons/md';

const Hamburger = ({ active, onActive, offActive }) => {
  const handleClick = (e) => {
    if (active) {
      offActive();
    } else {
      onActive();
    }
  };

  return (
    <Box onClick={handleClick} fontSize={'30px'} as={'button'}>
      <MdMenu />
    </Box>
  );
};

export default Hamburger;
