import React, { useContext, useEffect, useState } from 'react';
import { Box, Image } from '@chakra-ui/react';
import DetailsContext from '../../context/DetailContext';

const ImgDetail = ({ data }) => {
  // const { resData } = useContext(DetailsContext);
  // const [data, setData] = useState({});

  return (
    <Box id="img-zoom-container">
      <Image src={data.img_details.img} />
    </Box>
  );
};

export default ImgDetail;
