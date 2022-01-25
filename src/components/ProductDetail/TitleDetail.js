import { Box, Heading, Text } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import DetailsContext from '../../context/DetailContext';

const TitleDetail = () => {
  const { resData } = useContext(DetailsContext);
  const [dataToShow, setDataToShow] = useState(null);

  useEffect(() => {
    setDataToShow(resData[0]);
    // console.log(resData[0]);
  }, [resData]);

  useEffect(() => {}, [dataToShow]);

  return (
    <Box mb={'2rem'}>
      {!dataToShow?.name ? (
        ''
      ) : (
        <>
          <Box>
            {dataToShow.typeProd.map((item) => (
              <Box key={item} as="span" fontSize={'10px'} color={'gray.400'}>
                {item.toUpperCase()}{' '}
              </Box>
            ))}
          </Box>
          <Heading as={'h1'} size="xl" mb={'1rem'}>
            {dataToShow.name}
          </Heading>
          <Box>
            <Text color={'redPrincipal.light'}>
              ${dataToShow.price}{' '}
              <Box as={'span'} color={'text'}>
                COP
              </Box>
            </Text>
          </Box>
        </>
      )}
    </Box>
  );
};

export default TitleDetail;
