import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import FavoriteContext from '../context/FavoriteContext';
import FavViewContext from '../context/FavViewContext';
import { Box, Flex, Text } from '@chakra-ui/react';
import SpinnerComponent from '../components/Spinner/SpinnerComponent';
import Pagination from '../components/Pagination/Pagination';
import FavoritesMenu from '../components/Favorites/FavoritesMenu';
import FavoritesListe from '../components/Favorites/FavoritesListe';
import SectionTitle from '../components/SectionTitle/SectionTitle';

const FavoritosView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pg } = queryString.parse(location.search);

  const [page, setPage] = useState(parseInt(pg));
  const [maxPage, setMaxPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalItemes, setTotalItemes] = useState(0);

  const { resGetFav } = useContext(FavViewContext);
  const { updateFav } = useContext(FavoriteContext);

  useEffect(() => {
    document.title = `8 Bits Store bq - Favoritos`;
    setLoading(true);
    const req = async () => {
      try {
        const res = await resGetFav(page);
        // console.log(res);
        setMaxPage(res?.maxPage ? res?.maxPage : 1);
        setTotalItemes(res.total);
        navigate(`?pg=${page}`);
        document.title = `8 Bits Store bq - Busqueda`;
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    req();
  }, [page, updateFav]);

  return (
    <>
      <SectionTitle title={'Tus Favoritos 🤗'} />
      <Flex
        w={{ base: '100%', md: '90%', '2xl': '1536px' }}
        mx={'auto'}
        my={5}
        flexDir={'column'}
        p={5}
      >
        <FavoritesMenu />
        {/* <Box
          minH={'50px'}
          width={'100%'}
          p={3}
          my={5}
          mb={10}
          // bg={'redPrincipal.light'}
          // color="white"
          boxShadow="md"
          rounded="sm"
        >
          <Text fontWeight={'bold'} fontSize={{ base: '12px', sm: '16px' }}>
            {totalItemes} Favorito(s) 🥳
          </Text>
        </Box> */}
        {loading ? <SpinnerComponent /> : <FavoritesListe page={page} />}
        {(page === 1 && maxPage === 1) || (
          <Pagination page={page} setPage={setPage} maxPage={maxPage} loading={loading} />
        )}
      </Flex>
    </>
  );
};

export default FavoritosView;
