import React, { useContext, useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';
import SpinnerComponent from '../Spinner/SpinnerComponent';
import TematicaList from './TematicaList';
import TematicaMenu from './TematicaMenu';
import TematicaContext from '../../context/TematicaContex';
import queryString from 'query-string';
import FavoriteContext from '../../context/FavoriteContext';

const Tematica = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pg } = queryString.parse(location.search);

  const [page, setPage] = useState(parseInt(pg));
  const [maxPage, setMaxPage] = useState(1);
  const [loading, setLoading] = useState(false);
  let loc = location.pathname.split('/');

  const { categoryGet } = useContext(TematicaContext);
  const { updateFav } = useContext(FavoriteContext);

  // const categories = useMemo(() =>getFiguresByCategory(loc[loc.length - 1]) , []);

  useEffect(() => {
    setLoading(true);
    const req = async () => {
      try {
        const res = await categoryGet(loc[loc.length - 1], page);
        // console.log(res);
        setMaxPage(res?.maxPage ? res?.maxPage : 1);
        navigate(`?pg=${page}`);
        document.title = `8 Bits Store bq - ${loc[loc.length - 1]}`;
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    req();
  }, [page, updateFav]);

  // useEffect(() => {
  //   setLoading(true);
  //   const req = async () => {
  //     try {
  //       const res = await categoryGet(loc[loc.length - 1], page);
  //       // console.log(res);
  //       setMaxPage(res.maxPage ? res.maxPage : 1);
  //       navigate(`?pg=${page}`);
  //       document.title = `8 Bits Store bq - ${loc[loc.length - 1]}`;
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   req();
  // }, [page]);

  // useEffect(() => {
  //   setLoading(true);
  //   const req = async () => {
  //     try {
  //       const res = await categoryGet(loc[loc.length - 1], page);
  //       // console.log(res);
  //       setMaxPage(res.maxPage ? res.maxPage : 1);
  //       navigate(`?pg=${page}`);
  //       document.title = `8 Bits Store bq - ${loc[loc.length - 1]}`;
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   req();
  // }, [updateFav]);

  return (
    <>
      <Flex
        w={{ base: '100%', md: '90%', '2xl': '1536px' }}
        mx={'auto'}
        my={5}
        flexDir={'column'}
        p={5}
      >
        <TematicaMenu />

        {loading ? <SpinnerComponent /> : <TematicaList page={page} />}
        {(page === 1 && maxPage === 1) || (
          <Pagination page={page} setPage={setPage} maxPage={maxPage} loading={loading} />
        )}
      </Flex>
    </>
  );
};

export default Tematica;
