import React, { useContext } from 'react';
import { Box } from '@chakra-ui/react';
import ShowTypeView from '../ShowTypeView/ShowTypeView';
import TematicaContext from '../../context/TematicaContex';

const TematicaMenu = () => {
  const { resData, typeView, setTypeView, orderName } = useContext(TematicaContext);

  const hanldeOrderByName = (type) => {
    orderName(resData, type);
  };

  return (
    <Box maxHeight={'65px'} minH={'50px'} width={'100%'} borderWidth="1px" p={3} my={5}>
      <ShowTypeView typeView={typeView} setTypeView={setTypeView} />
      <span onClick={(e) => hanldeOrderByName('Asc')}>ordenar por nombre - Asc</span>
      <span> / </span>
      <span onClick={(e) => hanldeOrderByName('Des')}>ordenar por nombre - Des</span>
    </Box>
  );
};

export default TematicaMenu;
