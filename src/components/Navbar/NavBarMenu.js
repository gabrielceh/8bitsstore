import React, { useState } from 'react';
import { useModal } from '../../hooks/useModal';
import { LinksNavBar } from '../../styled/links.styled';
import Hamburger from '../Hamburger/Hamburger';
import HamburgerMenu from '../Hamburger/HamburgerMenu';

const NavBarMenu = () => {
  const [wSize, setWSize] = useState(window.innerWidth);
  const [isOpen, onOpen, onClose] = useModal();

  const links = [
    { to: '/nuevo', label: 'Lo nuevo' },
    { to: '/tematica', label: 'Temáticas' },
    { to: '/favoritos', label: 'Favoritos' },
    { to: '/contacto', label: 'Contactamos' },
  ];

  window.addEventListener('resize', (e) => {
    setWSize(window.innerWidth);
  });

  return (
    <div>
      {wSize < 768 ? (
        <>
          <Hamburger active={isOpen} onActive={onOpen} offActive={onClose} />
          <HamburgerMenu onClose={onClose} isOpen={isOpen} links={links} />
        </>
      ) : (
        links.map((item) => (
          <LinksNavBar
            key={item.to}
            to={item.to}
            className={({ isActive }) => isActive && 'active'}
          >
            {item.label}
          </LinksNavBar>
        ))
      )}
    </div>
  );
};

export default NavBarMenu;
