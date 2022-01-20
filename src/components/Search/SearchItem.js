import React, { useContext } from 'react';
import { Badge, Box, Image, Text } from '@chakra-ui/react';
import SearchContext from '../../context/SearchContext';
import { categoriesColor } from '../../data/categoriesColors';

const SearchItem = ({ item, typeView }) => {
  // const { typeView } = useContext(SearchContext);

  return (
    <Box
      maxW={typeView === 'grid' ? '250px' : '100%'}
      width={typeView === 'grid' ? 'auto' : '100%'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      margin={'0 auto'}
      className="animate__animated animate__fadeIn"
    >
      <Box
        display={typeView === 'grid' ? '' : 'flex'}
        flexDirection={typeView === 'grid' ? '' : 'row'}
        justifyContent={typeView === 'grid' ? '' : 'flex-start'}
        alignItems={typeView === 'grid' ? '' : 'center'}
      >
        <Image
          src={item.img.img}
          alt={item.img.alt}
          maxW={typeView === 'grid' ? '190px' : '150px'}
        />

        <Box
          p="3"
          maxW={typeView === 'grid' ? '180px' : '100%'}
          margin={typeView === 'grid' ? '0 auto' : '0'}
        >
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
    </Box>
  );
};

export default SearchItem;
