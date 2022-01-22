import React, { useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

import BreadcrumbComponent from '../BreadcrumbComponent/BreadcrumbComponent';
import Logo from '../Logo/Logo';
import NavBarMenu from './NavBarMenu';
import Search from '../Search/Search';

const NavbarComponent = ({ breadCrumb }) => {
  const [showSearch, setShowSearch] = useState(false);

  const social = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/8bitsstorebq/',
      variant: 'instagram',
    },
  ];
  return (
    <>
      <Box bg="text" h={{ base: 'auto', md: '1.8rem' }} padding={{ base: '0 1rem', md: '0' }}>
        <Flex
          w={{ base: '100%', md: '90%', '2xl': '1536px' }}
          justify={'flex-end'}
          margin={'0 auto'}
        >
          {social.map((item) => (
            <a key={item.name} href={item.url} target={'_blank'} rel="noreferrer">
              <Text variant={item.variant ? item.variant : ''}>{item.name}</Text>
            </a>
          ))}
        </Flex>
      </Box>

      <Box position={'sticky'} top={'0px'} zIndex={'sticky'} boxShadow="md">
        <header>
          <Box
            bg="yellowPrincipal.primary"
            color="text"
            h={'56px'}
            padding={{ base: '0 1rem', md: '0' }}
          >
            <Flex
              w={{ base: '100%', md: '90%', '2xl': '1536px' }}
              h="100%"
              margin={'0 auto'}
              py={{ base: 3, md: 3 }}
              // direction={{ base: 'column', md: 'row' }}
              justify={'space-between'}
              alignItems={'center'}
            >
              <Logo />
              <NavBarMenu setClickSearch={setShowSearch} click={showSearch} />
            </Flex>
          </Box>
          {showSearch && <Search bgColor={'yellowPrincipal.light'} setShowSearch={setShowSearch} />}
          <BreadcrumbComponent data={breadCrumb} />
        </header>
      </Box>
    </>
  );
};

export default NavbarComponent;
