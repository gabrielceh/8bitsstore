import styled from 'styled-components/macro';

export const ButtonUp = styled.div`
  cursor: pointer;
  position: fixed;
  z-index: 9999;
  bottom: 3vh;
  right: 3vh;
  background-color: #ff5e4d;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: #fff;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 10px #aaa;
  visibility: hidden;
  opacity: 0;
  transition: background-color 0.3s ease-in-out, visibility 0.3s ease-in-out,
    opacity 0.3s ease-in-out;

  &:hover {
    background-color: #b10000;
  }

  &.is-active {
    visibility: visible;
    opacity: 1;
  }
`;
