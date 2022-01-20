import { Box, Button } from '@chakra-ui/react';
import React, { useContext } from 'react';
import FavoriteContext from '../../context/FavoriteContext';
import FavViewContext from '../../context/FavViewContext';
import MenuOrder from '../MenuOrder/MenuOrder';
import ShowTypeView from '../ShowTypeView/ShowTypeView';

const FavoritesMenu = () => {
  const { resData, typeView, setTypeView, orderName, orderPrice } = useContext(FavViewContext);
  const { clearFavorites } = useContext(FavoriteContext);

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
      mb={5}
      display={'flex'}
      justifyContent={'flex-end'}
      alignItems={'center'}
      flexWrap={'wrap'}
    >
      <Box
        width={{ base: '30%', sm: 'auto' }}
        margin={{ base: '0 auto', sm: 0 }}
        display={{ base: 'flex', sm: 'block' }}
        justifyContent={{ base: 'center', sm: '' }}
        alignItems={{ base: 'center', sm: '' }}
        ms={{ base: '0', sm: '20px' }}
      >
        <Button
          fontSize={{ base: '12px', sm: '16px' }}
          p={{ base: '0.5rem', sm: '0.5rem' }}
          onClick={clearFavorites}
          bg={'bluePrincipal.dark'}
          color={'white'}
        >
          Limpiar favs
        </Button>
      </Box>

      <Box
        width={{ base: '30%', sm: 'auto' }}
        margin={{ base: '0 auto', sm: 0 }}
        display={{ base: 'flex', sm: 'block' }}
        justifyContent={{ base: 'center', sm: '' }}
        alignItems={{ base: 'center', sm: '' }}
        ms={{ base: '0', sm: '20px' }}
      >
        <MenuOrder orderName={handleOrderByName} orderPrice={handleOrderByPrice} />
      </Box>

      <Box
        width={{ base: '30%', sm: 'auto' }}
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

export default FavoritesMenu;
