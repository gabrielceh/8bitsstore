import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DetailsContext from '../context/DetailContext';
import queryString from 'query-string';
import ImgDetail from '../components/ProductDetail/ImgDetail';
import ModalComponent from '../components/Modal/ModalComponent';
import TitleDetail from '../components/ProductDetail/TitleDetail';
import BtnFavDetail from '../components/ProductDetail/BtnFavDetail';
import FavoriteContext from '../context/FavoriteContext';
import CategoryDetail from '../components/ProductDetail/CategoryDetail';
import DescriptionDetail from '../components/ProductDetail/DescriptionDetail';
import { Box, Divider, Flex, SimpleGrid } from '@chakra-ui/react';
import BtnSocial from '../components/BtnSocial/BtnSocial';
import { LOCATION_PAGE } from '../helpers/enviroment';

const ProductDetailsView = () => {
  const location = useLocation();
  const { qid } = queryString.parse(location.search);
  const [data, setData] = useState({});
  const [urlLocation, setUrlLocation] = useState('');

  const { productGet, closeModal, isOpen } = useContext(DetailsContext);
  const { updateFav } = useContext(FavoriteContext);

  let loc = location.pathname.split('/');

  useEffect(() => {
    console.log(LOCATION_PAGE.href);
    setUrlLocation(LOCATION_PAGE.href);
  }, []);

  useEffect(() => {
    const req = async () => {
      const res = await productGet(qid);
      console.log(res);
      setUrlLocation(LOCATION_PAGE.href);
      await setData(res[0]);
      document.title = `8 Bits Store bq - ${loc[loc.length - 2]} - ${loc[loc.length - 1]}`;
    };
    req();
  }, [updateFav]);

  return (
    <>
      <ModalComponent isOpen={isOpen} onClose={closeModal}></ModalComponent>
      <Flex
        w={{ base: '100%', md: '90%', '2xl': '1536px' }}
        mx={'auto'}
        my={5}
        flexDir={'column'}
        p={5}
      >
        <SimpleGrid columns={[1, null, 2]} spacing={{ base: '40px', md: '100px' }} mb={'1rem'}>
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={{ base: 'center', md: 'flex-end' }}
            alignItems={{ base: 'center', md: 'flex-end' }}
          >
            <ImgDetail />
          </Box>
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'flex-center'}
            alignItems={'flex-start'}
          >
            <TitleDetail />
            <CategoryDetail />
            <BtnFavDetail />
          </Box>
        </SimpleGrid>
        <SimpleGrid columns={[1, null, 2]} spacing={{ base: '40px', md: '100px' }} mb={'1rem'}>
          <DescriptionDetail />
          <BtnSocial urlLocation={urlLocation} data={data} />
        </SimpleGrid>
      </Flex>
    </>
  );
};

export default ProductDetailsView;
