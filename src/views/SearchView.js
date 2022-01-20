import React, { useContext, useEffect, useState } from 'react';
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import SearchContext from '../context/SearchContext';
import { Box, Flex, Text } from '@chakra-ui/react';
import Pagination from '../components/Pagination/Pagination';
import SearchMenu from '../components/Search/SearchMenu';
import SearchList from '../components/Search/SearchList';
import SpinnerComponent from '../components/Spinner/SpinnerComponent';
import FavoriteContext from '../context/FavoriteContext';

const SearchView = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { search, pg } = queryString.parse(location.search);
  const { resGetSearch } = useContext(SearchContext);

  const [page, setPage] = useState(parseInt(pg));
  const [maxPage, setMaxPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalItemes, setTotalItemes] = useState(0);

  const { updateFav } = useContext(FavoriteContext);

  useEffect(() => {
    setLoading(true);
    const req = async () => {
      try {
        const res = await resGetSearch(search, page);
        // console.log(res);
        setMaxPage(res?.maxPage ? res?.maxPage : 1);
        setTotalItemes(res.total);
        navigate(`?search=${search}&pg=${page}`);
        document.title = `8 Bits Store bq - Busqueda`;
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    req();
  }, [search, page, updateFav]);

  // useEffect(() => {
  //   setLoading(true);
  //   const req = async () => {
  //     try {
  //       const res = await resGetSearch(search, page);
  //       // console.log(res);
  //       setMaxPage(res?.maxPage ? res?.maxPage : 1);
  //       setTotalItemes(res.total);
  //       navigate(`?search=${search}&pg=${page}`);
  //       document.title = `8 Bits Store bq - Busqueda`;
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   req();
  // }, [search]);

  // useEffect(() => {
  //   setLoading(true);
  //   const req = async () => {
  //     try {
  //       const res = await resGetSearch(search, page);
  //       // console.log(res);
  //       setMaxPage(res?.maxPage ? res?.maxPage : 1);
  //       setTotalItemes(res.total);
  //       navigate(`?search=${search}&pg=${page}`);
  //       document.title = `8 Bits Store bq - Busqueda`;
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   req();
  // }, [page]);

  return (
    <Flex
      w={{ base: '100%', md: '90%', '2xl': '1536px' }}
      mx={'auto'}
      my={5}
      flexDir={'column'}
      p={5}
    >
      <SearchMenu />
      <Box
        minH={'50px'}
        width={'100%'}
        p={3}
        my={5}
        mb={10}
        bg={'bluePrincipal.light'}
        color="white"
        boxShadow="md"
        rounded="sm"
      >
        <Text fontWeight={'bold'} fontSize={{ base: '12px', sm: '16px' }}>
          Mostrando {totalItemes} resultado(s) para: "{search}"
        </Text>
      </Box>
      {loading ? <SpinnerComponent /> : <SearchList page={page} />}
      {(page === 1 && maxPage === 1) || (
        <Pagination page={page} setPage={setPage} maxPage={maxPage} loading={loading} />
      )}
    </Flex>
  );
};

export default SearchView;
