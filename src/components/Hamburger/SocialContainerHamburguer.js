import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { SocialContainer } from './SocialContainerHamburguer.styled';

const SocialContainerHamburguer = ({ social = [] }) => {
  return (
    <SocialContainer>
      {social.map((item) => (
        <Flex
          key={item.name}
          direction={'row'}
          alignContent={'center'}
          justifyContent={'center'}
          mb={1}
        >
          <a href={item.url} target={'_blank'} rel="noreferrer">
            <Text variant={item.variant ? item.variant : ''}>{item.name}</Text>
          </a>
        </Flex>
      ))}
    </SocialContainer>
  );
};

export default SocialContainerHamburguer;
