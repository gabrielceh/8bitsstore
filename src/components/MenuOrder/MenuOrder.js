import React from 'react';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import {
  ImSortAlphaAsc,
  ImSortAlphaDesc,
  ImSortNumericAsc,
  ImSortNumbericDesc,
} from 'react-icons/im';

import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

const MenuOrder = ({ orderName, orderPrice }) => {
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            as={Button}
            isActive={isOpen}
            colorScheme="redPrincipal"
            rightIcon={isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            fontSize={{ base: '12px', sm: '16px' }}
            p={{ base: '0.5rem', sm: '1rem' }}
          >
            Ordenar
          </MenuButton>
          <MenuList minWidth="240px" boxShadow="lg" rounded={'md'}>
            <MenuItem value="name_asc" onClick={(e) => orderName('Asc')} icon={<ImSortAlphaAsc />}>
              Nombre Ascendente
            </MenuItem>
            <MenuItem
              value="name_desc"
              onClick={(e) => orderName('Des')}
              icon={<ImSortAlphaDesc />}
            >
              Nombre Descendente
            </MenuItem>

            <MenuItem
              value="price_asc"
              onClick={(e) => orderPrice('Asc')}
              icon={<ImSortNumericAsc />}
            >
              Menor Precio
            </MenuItem>
            <MenuItem
              value="price_desc"
              onClick={(e) => orderPrice('Des')}
              icon={<ImSortNumbericDesc />}
            >
              Mayor Precio
            </MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default MenuOrder;
