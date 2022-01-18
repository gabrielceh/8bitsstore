import { Badge, Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { categoriesColor } from '../../data/categoriesColors';

const TematicaItem = ({ item }) => {
  // console.log(item.category);

  return (
    <Box maxW="250px" borderWidth="1px" borderRadius="lg" overflow="hidden" margin={'0 auto'}>
      <Image src={item.img.img} alt={item.img.alt} />

      <Box p="3" maxW={'180px'} margin={'0 auto'}>
        <Box display="flex" flexDir={'row'} alignItems="center" flexWrap={'wrap'}>
          {item.category?.map((cat, i) => (
            <Badge
              key={item.name + i}
              borderRadius="full"
              px="2"
              fontSize="10px"
              colorScheme={categoriesColor[cat]}
              my={1}
              maxW={'70px'}
              isTruncated
            >
              {cat}
            </Badge>
          ))}

          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          ></Box>
        </Box>

        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
          {item.name}
        </Box>

        <Box>
          <Text as="span" color={'blue.300'}>
            ${item.price}
          </Text>
          <Text as="span" color="gray.600" fontSize="xs">
            / COP
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default TematicaItem;
