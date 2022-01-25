import { Box, Divider, Icon, SimpleGrid, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { BsTwitter } from 'react-icons/bs';
import { MdFacebook } from 'react-icons/md';

const BtnSocial = ({ urlLocation, data }) => {
  const [url, setUrl] = useState('');
  console.log(data);

  useEffect(() => {
    setUrl(urlLocation);
    console.log(urlLocation);
  }, [urlLocation]);

  return (
    <SimpleGrid
      columns={[1, null, 2]}
      spacing={'40px'}
      mb={'1rem'}
      justifyContent={'center'}
      alignItems={'center'}
      boxShadow="md"
      p={'1rem'}
    >
      <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'} h={'auto'}>
        <a href={`http://www.facebook.com/sharer.php?u=${url}`} target="_blank" rel="noreferrer">
          <Text variant={'facebook'} as="span">
            Compartir en FB
          </Text>
          <Icon as={MdFacebook} mx={'0.5rem'} w={'25px'} h={'25px'} color={'facebookColor'} />
        </a>
      </Box>
      <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'} h={'auto'}>
        <a
          href={`https://twitter.com/share?text=${data.name} - ${data.description}&url=${url}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Text variant={'twitter'} as="span">
            Compartir en Twitter
          </Text>
          <Icon as={BsTwitter} mx={'0.5rem'} w={'25px'} h={'25px'} color={'twitterColor'} />
        </a>
      </Box>
    </SimpleGrid>
  );
};

export default BtnSocial;
