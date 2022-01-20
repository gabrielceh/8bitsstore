import { Box, Icon } from '@chakra-ui/react';
import React from 'react';
import { MdSearch } from 'react-icons/md';

const SearchICon = ({ setClick, click }) => {
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <Box as={'button'} fontSize={'20px'} me={'1rem'} title="Buscar" onClick={handleClick}>
      <Icon as={MdSearch} />
    </Box>
  );
};

export default SearchICon;
