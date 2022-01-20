import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import FavViewContext from '../../context/FavViewContext';
import ProductItem from '../ProductItem/ProductItem';

const FavoritesListe = ({ page }) => {
  const { resData, typeView, dataOrderByName, dataOrderByPrice } = useContext(FavViewContext);
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

  return (
    <>
      {dataShow.length <= 0 ? (
        <Box my={5}>
          <hr />
          <Text fontSize={'25px'} fontWeight={'bold'} p={3}>
            Tu lista de favoritos esta vacía 🙁
          </Text>
          <hr />
        </Box>
      ) : (
        <SimpleGrid
          columns={typeView === 'grid' ? { base: 1, sm: 2, md: 3, lg: 4 } : { base: 1, sm: 1 }}
          spacingX="10px"
          spacingY="20px"
        >
          {dataShow.map((item) => (
            <ProductItem key={item.id} item={item} typeView={typeView} />
          ))}
        </SimpleGrid>
      )}
    </>
  );
};

export default FavoritesListe;
