import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <>
      <Box bg="text">
        <Flex
          w={{ base: '100%', md: '90%', '2xl': '1536px' }}
          justify={'flex-end'}
          margin={'0 auto'}
        ></Flex>
      </Box>
    </>
  );
};

export default Footer;
