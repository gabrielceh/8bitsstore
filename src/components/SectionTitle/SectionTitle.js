import { Box } from '@chakra-ui/react';
import React from 'react';

const SectionTitle = ({ title }) => {
  return (
    <Box w={'100%'} textTransform={'uppercase'} bg={'bluePrincipal.dark'} py={5} boxShadow="md">
      <Box
        w={{ base: '100%', md: '90%', '2xl': '1536px' }}
        color={'white'}
        mx={'auto'}
        fontWeight={'bold'}
        textAlign={'center'}
      >
        {title}
      </Box>
    </Box>
  );
};

export default SectionTitle;
