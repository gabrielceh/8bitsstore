import React, { useContext } from 'react';
import { Box, Icon, Tooltip } from '@chakra-ui/react';
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
    <>
      <Tooltip label={isFav ? 'Eliminar de fav' : 'Agregar a fav'} aria-label="A tooltip">
        <Box as={'button'} fontSize={'25px'}>
          {isFav ? (
            <Icon as={AiFillHeart} color={'redPrincipal.light'} onClick={handleDelete} />
          ) : (
            <Icon as={AiFillHeart} onClick={handleAdd} />
          )}
        </Box>
      </Tooltip>
    </>
  );
};

export default BtnFav;
