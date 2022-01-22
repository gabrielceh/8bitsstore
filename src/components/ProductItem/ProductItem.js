import React from 'react';
import { Badge, Box, Image, Text } from '@chakra-ui/react';
import { categoriesColor } from '../../data/categoriesColors';
import BtnFav from '../BtnFav/BtnFav';
import { useLocation, useNavigate } from 'react-router-dom';

const ProductItem = ({ item, typeView }) => {
  const navigate = useNavigate();
  const location = useLocation();
  let loc = location.pathname.split('/');

  const handleDetail = () => {
    navigate(`/details/${item.name}?qid=${item.id}&name=${item.name}`);
  };
  return (
    <Box
      maxW={typeView === 'grid' ? '250px' : '100%'}
      width={typeView === 'grid' ? 'auto' : '100%'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      margin={'0 auto'}
      className="animate__animated animate__fadeIn"
      onClick={handleDetail}
      cursor={'pointer'}
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
          w={typeView === 'grid' ? '180px' : '100%'}
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
          </Box>

          {item.typeProd.map((el) => (
            <Box
              key={el}
              my="0.5rem"
              color={'gray.400'}
              fontWeight="semibold"
              fontSize={'10px'}
              lineHeight="tight"
              textTransform="uppercase"
              isTruncated
            >
              {el}
            </Box>
          ))}
          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
            {item.name}
          </Box>

          <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} w={'100%'}>
            <Box w={'40%'}>
              <Text as="span" color={'blue.300'}>
                ${item.price}
              </Text>
              <Text as="span" color="gray.600" fontSize="xs">
                / COP
              </Text>
            </Box>
            <Box justifySelf={'flex-end'}>
              <BtnFav item={item} isFav={item.isFav} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductItem;
