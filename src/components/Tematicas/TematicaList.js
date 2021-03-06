import React, { useContext, useEffect, useState } from 'react';
import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import TematicaContext from '../../context/TematicaContex';
import ProductItem from '../ProductItem/ProductItem';

const TematicaList = ({ page }) => {
  const { resData, typeView, dataOrderByName, dataOrderByPrice } = useContext(TematicaContext);
  const [dataShow, setDataShow] = useState(resData);

  useEffect(() => {
    const res = async () => {
      // console.log(resData);
      await setDataShow(resData);
      // setDataOrderByName(resData);
      // console.log(dataShow);
    };
    res();
  }, []);

  useEffect(() => {
    const res = async () => {
      // console.log(resData);
      await setDataShow(dataOrderByName);
      // console.log(dataShow);
    };
    res();
  }, [dataOrderByName]);

  useEffect(() => {
    const res = async () => {
      // console.log(resData);
      await setDataShow(dataOrderByPrice);
      // console.log(dataShow);
    };
    res();
  }, [dataOrderByPrice]);

  useEffect(() => {
    const res = async () => {
      // console.log(resData);
      await setDataShow(resData);
      // console.log(dataShow);
    };
    res();
  }, [page]);

  // orderCategoryByName(data);
  return (
    <SimpleGrid
      columns={typeView === 'grid' ? { base: 1, sm: 2, md: 3, lg: 4 } : { base: 1, sm: 1 }}
      spacingX="10px"
      spacingY="20px"
    >
      {dataShow.length <= 0 ? (
        <Box>
          <Text>No se encontraron elementos para esta categoria</Text>
        </Box>
      ) : (
        dataShow.map((item) => <ProductItem key={item.id} item={item} typeView={typeView} />)
      )}
    </SimpleGrid>
  );
};

export default TematicaList;
