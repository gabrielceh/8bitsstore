import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import BreadcrumbComponent from '../BreadcrumbComponent/BreadcrumbComponent';
import Logo from '../Logo/Logo';
import NavBarMenu from './NavBarMenu';

const NavbarComponent = ({ breadCrumb }) => {
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

      <Box position={'sticky'} top={'0px'} zIndex={'sticky'}>
        <Box
          bg="yellowPrincipal.primary"
          color="text"
          h={{ base: 'auto', md: '3.8rem' }}
          padding={{ base: '0 1rem', md: '0' }}
        >
          <Flex
            w={{ base: '100%', md: '90%', '2xl': '1536px' }}
            h="100%"
            margin={'0 auto'}
            py={{ base: 2, md: 3 }}
            // direction={{ base: 'column', md: 'row' }}
            justify={'space-between'}
            alignItems={'center'}
          >
            <Logo />
            <NavBarMenu />
          </Flex>
        </Box>
        <BreadcrumbComponent data={breadCrumb} />
      </Box>
    </>
  );
};

export default NavbarComponent;
