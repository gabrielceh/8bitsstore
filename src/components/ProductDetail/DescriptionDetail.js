import { Box, Heading, Text } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import DetailsContext from '../../context/DetailContext';

const DescriptionDetail = () => {
  const { resData } = useContext(DetailsContext);
  const [dataToShow, setDataToShow] = useState(null);

  useEffect(() => {
    setDataToShow(resData[0]);
    // console.log(resData[0]);
  }, [resData]);

  return (
    <Box>
      {!dataToShow?.description ? (
        ''
      ) : (
        <>
          <Box p={'1rem'}>
            <Heading as="h3" size="md" mb={'1rem'}>
              Descripción:
            </Heading>
            <Text>{dataToShow.description}</Text>
          </Box>
        </>
      )}
    </Box>
  );
};

export default DescriptionDetail;
