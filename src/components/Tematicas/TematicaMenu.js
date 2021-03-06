import React, { useContext } from 'react';
import { Box, Divider } from '@chakra-ui/react';
import ShowTypeView from '../ShowTypeView/ShowTypeView';
import TematicaContext from '../../context/TematicaContex';
import MenuOrder from '../MenuOrder/MenuOrder';

const TematicaMenu = () => {
  const { resData, typeView, setTypeView, orderName, orderPrice } = useContext(TematicaContext);

  const handleOrderByName = (type) => {
    orderName(resData, type);
  };

  const handleOrderByPrice = (type) => {
    orderPrice(resData, type);
  };

  return (
    <Box
      minH={'50px'}
      width={'100%'}
      borderWidth="1px"
      p={3}
      my={5}
      mb={10}
      display={'flex'}
      justifyContent={'flex-end'}
      alignItems={'center'}
      flexWrap={'wrap'}
    >
      <Box
        width={{ base: '50%', sm: 'auto' }}
        margin={{ base: '0 auto', sm: 0 }}
        display={{ base: 'flex', sm: 'block' }}
        justifyContent={{ base: 'center', sm: '' }}
        alignItems={{ base: 'center', sm: '' }}
        ms={{ base: 0, sm: '20px' }}
      >
        <MenuOrder orderName={handleOrderByName} orderPrice={handleOrderByPrice} />
      </Box>
      <Box
        width={{ base: '50%', sm: 'auto' }}
        margin={{ base: '0 auto', sm: 0 }}
        display={{ base: 'flex', sm: 'block' }}
        justifyContent={{ base: 'center', sm: '' }}
        alignItems={{ base: 'center', sm: '' }}
        ms={{ base: 0, sm: '20px' }}
      >
        <ShowTypeView typeView={typeView} setTypeView={setTypeView} />
      </Box>
    </Box>
  );
};

export default TematicaMenu;
