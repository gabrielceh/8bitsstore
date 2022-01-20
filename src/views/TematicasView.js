import React, { useEffect, useMemo } from 'react';
import { Flex } from '@chakra-ui/react';
import TamaticasList from '../components/Tematicas/TamaticasList';
import { getCategories } from '../helpers/getCategories';
import BreadcrumbComponent from '../components/BreadcrumbComponent/BreadcrumbComponent';

const TematicasView = () => {
  const categories = useMemo(() => getCategories(), []);
  // categories && console.log(categories);
  useEffect(() => {
    document.title = `8 Bits Store bq - Tematicas`;
  }, []);

  return (
    <>
      <Flex
        w={{ base: '100%', md: '90%', '2xl': '1536px' }}
        mx={'auto'}
        my={5}
        flexDir={'column'}
        p={5}
      >
        <TamaticasList data={categories} />
      </Flex>
    </>
  );
};

export default TematicasView;
