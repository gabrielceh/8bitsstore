import { Box, Button } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import DetailsContext from '../../context/DetailContext';
import FavoriteContext from '../../context/FavoriteContext';

const BtnFavDetail = () => {
  const { resData } = useContext(DetailsContext);
  const [dataToShow, setDataToShow] = useState(null);
  const { deleteFavorite, addFavorite } = useContext(FavoriteContext);

  useEffect(() => {
    setDataToShow(resData[0]);
    // console.log(resData[0]);
  }, [resData]);
  // console.log(isFav);

  const handleFav = () => {
    if (resData[0]?.isFav) {
      deleteFavorite(dataToShow);
    } else {
      addFavorite(dataToShow);
    }
  };

  return (
    <>
      {!dataToShow ? (
        ''
      ) : (
        <Box
          as={'button'}
          bg={dataToShow.isFav ? 'redPrincipal.light' : 'redPrincipal.dark'}
          textAlign={'center'}
          color={'#fff'}
          borderRadius={'md'}
          p={3}
          px={10}
          _hover={dataToShow.isFav ? { bg: 'redPrincipal.dark' } : { bg: 'redPrincipal.light' }}
          onClick={handleFav}
        >
          {!dataToShow?.isFav ? 'Añadir a favoritos ❤' : 'Eliminar de favoritos 💔'}
        </Box>
      )}
    </>
  );
};

export default BtnFavDetail;
