import { Icon, Tooltip } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { ButtonUp } from '../../styled/button.styled';

const BtnUp = () => {
  const refButtonUp = useRef();

  window.addEventListener('scroll', (e) => {
    if (window.pageYOffset >= 250) {
      refButtonUp.current.classList.add('is-active');
    } else {
      refButtonUp.current.classList.remove('is-active');
    }
  });

  const handleTop = (e) => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  };
  return (
    <>
      <Tooltip label="Ir al top" aria-label="A tooltip">
        <ButtonUp ref={refButtonUp}>
          <Icon as={IoIosArrowUp} onClick={handleTop} />
        </ButtonUp>
      </Tooltip>
    </>
  );
};

export default BtnUp;
