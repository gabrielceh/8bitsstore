import React, { useContext } from 'react';
import { Box, Icon } from '@chakra-ui/react';
import { AiFillHeart } from 'react-icons/ai';
import FavoriteContext from '../../context/FavoriteContext';

const BtnFav = ({ isFav, item }) => {
  const { deleteFavorite, addFavorite } = useContext(FavoriteContext);
  // console.log(isFav);

  const handleAdd = () => {
    addFavorite(item);
  };

  const handleDelete = () => {
    deleteFavorite(item);
  };

  return (
    <Box as={'button'} fontSize={'25px'}>
      {isFav ? (
        <Icon
          as={AiFillHeart}
          color={'redPrincipal.light'}
          title={'Remover de favoritos'}
          onClick={handleDelete}
        />
      ) : (
        <Icon as={AiFillHeart} title={'Agregar a favoritos'} onClick={handleAdd} />
      )}
    </Box>
  );
};

export default BtnFav;
