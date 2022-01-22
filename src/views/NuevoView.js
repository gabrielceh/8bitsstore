import { Flex } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import NewList from '../components/New/NewList';
import NewMenu from '../components/New/NewMenu';

import SectionTitle from '../components/SectionTitle/SectionTitle';
import SpinnerComponent from '../components/Spinner/SpinnerComponent';
import FavoriteContext from '../context/FavoriteContext';
import NewContext from '../context/NewContext';

const NuevoView = () => {
  const [loading, setLoading] = useState(false);

  const { newGet } = useContext(NewContext);
  const { updateFav } = useContext(FavoriteContext);
  const [status, setStatus] = useState(0);

  // const categories = useMemo(() =>getFiguresByCategory(loc[loc.length - 1]) , []);

  useEffect(() => {
    document.title = `8 Bits Store bq - Lo nuevo`;
    setLoading(true);
    const req = async () => {
      try {
        const res = await newGet();
        setStatus(res.status);
        console.log(res.status);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    req();
  }, [updateFav]);

  return (
    <>
      <SectionTitle title={'Mira los últimos productos de nuestro catálogo 😎'} />
      <Flex
        w={{ base: '100%', md: '90%', '2xl': '1536px' }}
        mx={'auto'}
        my={5}
        flexDir={'column'}
        p={5}
      >
        <NewMenu />

        {loading ? <SpinnerComponent /> : status === 200 && <NewList />}
      </Flex>
    </>
  );
};

export default NuevoView;
