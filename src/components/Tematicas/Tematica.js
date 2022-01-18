import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import CategoryContext from '../../context/CategoryContex';
import Pagination from '../Pagination/Pagination';
import SpinnerComponent from '../Spinner/SpinnerComponent';
import TematicaList from './TematicaList';

const Tematica = () => {
  const [route, setRoute] = useState('');
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  let loc = location.pathname.split('/');

  const { categoryGet } = useContext(CategoryContext);

  // const categories = useMemo(() =>getFiguresByCategory(loc[loc.length - 1]) , []);

  useEffect(() => {
    setLoading(true);
    const req = async () => {
      try {
        const res = await categoryGet(loc[loc.length - 1], page);
        // console.log(res);
        setData(res?.data);
        setMaxPage(res?.maxPage ? res?.maxPage : 1);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    req();
  }, []);

  useEffect(() => {
    setLoading(true);
    const req = async () => {
      try {
        const res = await categoryGet(loc[loc.length - 1], page);
        // console.log(res);
        setData(res.data);
        setMaxPage(res.maxPage ? res.maxPage : 1);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    req();
  }, [page]);

  return (
    <>
      <Flex
        w={{ base: '100%', md: '90%', '2xl': '1536px' }}
        mx={'auto'}
        my={5}
        flexDir={'column'}
        p={5}
      >
        {loading ? <SpinnerComponent /> : <TematicaList data={data} />}
        {(page === 1 && maxPage === 1) || (
          <Pagination page={page} setPage={setPage} maxPage={maxPage} loading={loading} />
        )}
      </Flex>
    </>
  );
};

export default Tematica;
