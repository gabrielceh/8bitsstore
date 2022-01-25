import { Badge, Box, Text } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import DetailsContext from '../../context/DetailContext';
import { categoriesColor } from '../../data/categoriesColors';

const CategoryDetail = () => {
  const { resData } = useContext(DetailsContext);
  const [dataToShow, setDataToShow] = useState(null);

  useEffect(() => {
    setDataToShow(resData[0]);
    // console.log(resData[0]);
  }, [resData]);

  return (
    <>
      <Box display="flex" flexDir={'row'} alignItems="center" flexWrap={'wrap'} mb={'2rem'}>
        {!dataToShow?.category ? (
          ''
        ) : (
          <>
            <Text>Categorias:</Text>
            {dataToShow.category?.map((cat, i) => (
              <Badge
                key={dataToShow.name + i}
                borderRadius="full"
                px="2"
                fontSize="10px"
                colorScheme={categoriesColor[cat]}
                my={1}
                mx={'.25rem'}
                isTruncated
              >
                {cat}
              </Badge>
            ))}
          </>
        )}
      </Box>
    </>
  );
};

export default CategoryDetail;
