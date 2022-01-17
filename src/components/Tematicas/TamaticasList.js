import React from 'react';
import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import { LinkCommon } from '../../styled/links.styled';

const TamaticasList = ({ data = [] }) => {
  return (
    <SimpleGrid minChildWidth="250px" spacing="40px">
      {data.length <= 0
        ? ''
        : data.map((item) => (
            <Box
              key={item.label}
              height={'240px'}
              maxW="382px"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              margin={{ base: '0 auto', sm: '0' }}
            >
              <Box
                bgImg={`url(${item.img382})`}
                w={{ base: '100%px' }}
                h={{ base: '150px' }}
                bgRepeat={'no-repeat'}
                bgPosition={'center'}
                overflow={'hidden'}
              ></Box>

              <Box textAlign={'right'} px={3} mt={1}>
                <a href={item.attribution} target="_blank" rel="noreferrer">
                  <Text fontSize="8px">{item.labelAttri}</Text>
                </a>
              </Box>
              <Box p={6}>
                <LinkCommon key={item.label} to={item.route}>
                  <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                    {item.label.toUpperCase()}
                  </Box>
                </LinkCommon>
              </Box>
            </Box>
          ))}
    </SimpleGrid>
  );
};

export default TamaticasList;
