import React from 'react';
import { Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Logo100Img } from '../../assets/img/images';
import { LogoHeader } from '../../styled/logo.styled';

const Logo = () => {
  return (
    <Box>
      <Link to="/">
        <LogoHeader src={Logo100Img.img} alt={Logo100Img.alt} />
      </Link>
    </Box>
  );
};

export default Logo;
