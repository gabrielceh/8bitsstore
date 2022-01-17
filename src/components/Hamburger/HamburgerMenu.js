import React from 'react';
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
} from '@chakra-ui/react';
import { LinksHamburger } from '../../styled/links.styled';
import Logo from '../Logo/Logo';
import { BsInstagram } from 'react-icons/bs';
import { IconInstagramNav } from '../../styled/icon.styled';
import SocialContainerHamburguer from './SocialContainerHamburguer';

const HamburgerMenu = ({ onClose, isOpen, links = [] }) => {
  const social = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/8bitsstorebq/',
      variant: 'instagram',
    },
  ];

  return (
    <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader
          borderBottomWidth="1px"
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'space-between'}
        >
          <Logo />
        </DrawerHeader>
        <DrawerBody p={0}>
          {links.map((item) => (
            <LinksHamburger key={item.to} to={item.to} onClick={onClose}>
              {item.label}
            </LinksHamburger>
          ))}

          <SocialContainerHamburguer social={social} />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default HamburgerMenu;
