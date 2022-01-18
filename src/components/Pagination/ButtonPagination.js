import { Icon } from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components/macro';

const ButtonPag = styled.button`
  background-color: ${(props) => (props.isFocused ? '#1f7ac3' : 'white')};
  color: ${(props) => (props.isFocused ? 'white' : 'black')};
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 100%;
  padding-bottom: 1rem;
`;

export const ButtonNextPrev = styled(Icon)`
  width: 1.5rem;
  height: 1.5rem;
  color: #1f7ac3;
  margin: 0 0.5rem;
  cursor: pointer;
`;

const ButtonPagination = ({ isFocused, onClick, children }) => {
  return (
    <ButtonPag key="action-1" isFocused={isFocused} onClick={onClick}>
      {children}
    </ButtonPag>
  );
};

export default ButtonPagination;
