import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import NewContext from '../../context/NewContext';
import ProductItem from '../ProductItem/ProductItem';

const NewList = ({ page }) => {
  const { resData, typeView, dataOrderByName, dataOrderByPrice } = useContext(NewContext);
  const [dataShow, setDataShow] = useState(resData);

  useEffect(() => {
    const res = async () => {
      // console.log(resData);
      setTimeout(() => {
        setDataShow(resData);
      }, 1);
      // await setDataShow(resData);
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

  return (
    <SimpleGrid
      columns={typeView === 'grid' ? { base: 1, sm: 2, md: 3, lg: 4 } : { base: 1, sm: 1 }}
      spacingX="10px"
      spacingY="20px"
    >
      {dataShow.length <= 0 ? (
        <Box>
          <hr />
          <Text p={5}>No se encontraron elementos</Text>
          <hr />
        </Box>
      ) : (
        dataShow.map((item) => <ProductItem key={item.id} item={item} typeView={typeView} />)
      )}
    </SimpleGrid>
  );
};

export default NewList;
