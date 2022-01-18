import React, { useContext, useEffect, useState } from 'react';
import { Badge, Box, Image, SimpleGrid, Text } from '@chakra-ui/react';
import TematicaItem from './TematicaItem';
import TematicaContext from '../../context/TematicaContex';

const TematicaList = ({ page }) => {
  const { resData, typeView, dataOrderByName, setDataOrderByName } = useContext(TematicaContext);
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
        dataShow.map((item) => <TematicaItem key={item.id} item={item} />)
      )}
    </SimpleGrid>
  );
};

export default TematicaList;
