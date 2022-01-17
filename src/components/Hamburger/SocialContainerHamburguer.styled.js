import styled from 'styled-components/macro';
import { Text } from '@chakra-ui/react';

export const SocialContainer = styled.div`
  position: absolute;
  bottom: 3vh;
  width: 90%;
  margin: 0 auto;
`;

export const TextSocial = styled.span`
  background: -webkit-linear-gradient(top left, #7928ca, #ff0080);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  transition: background 0.3s ease-in-out, -webkit-background-clip 0.3s ease-in-out,
    -webkit-text-fill-color 0.3s ease-in-out;

  &:hover {
    background: radial-gradient(
      circle at 30% 107%,
      #fdf497 0%,
      #fdf497 5%,
      #fd5949 45%,
      #d6249f 60%,
      #285aeb 90%
    );
    -webkit-background-clip: text;
    font-weight: 700;
    -webkit-text-fill-color: transparent;
  }
`;
