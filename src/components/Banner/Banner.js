import { Box } from '@chakra-ui/react';
import React from 'react';
import { BannerImg, BannerImg960, BannerImg768, BannerImg320 } from '../../assets/img/images';

const Banner = () => {
  return (
    <>
      <Box
        mx={'auto'}
        my={5}
        w={{ base: '100%', md: '968px', '2xl': '1536px' }}
        h={{ base: '50vh', md: '80vh' }}
        backgroundImage={{
          base: `url(${BannerImg320.img})`,
          sm: `url(${BannerImg768.img})`,
          md: `url(${BannerImg960.img})`,
          lg: `url(${BannerImg.img})`,
        }}
        bgAttachment={'fixed'}
        bgPosition={{ base: 'center', md: 'center', lg: 'top center' }}
        bgSize={'content'}
        bgRepeat={'no-repeat'}
        className="animate__animated animate__fadeInLeft"
      ></Box>
    </>
  );
};

export default Banner;
