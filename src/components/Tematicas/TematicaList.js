import React from 'react';
import { Badge, Box, Image, SimpleGrid, Text } from '@chakra-ui/react';
import TematicaItem from './TematicaItem';

const TematicaList = ({ data = [] }) => {
  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 4, lg: 5 }} spacingX="10px" spacingY="20px">
      {data.length <= 0 ? (
        <Box>
          <Text>No se encontraron elementos para esta categoria</Text>
        </Box>
      ) : (
        data.map((item) => <TematicaItem key={item.id} item={item} />)
      )}
    </SimpleGrid>
  );
};

export default TematicaList;
