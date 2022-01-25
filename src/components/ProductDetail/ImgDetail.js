import React, { useContext, useEffect, useState } from 'react';
import { Box, Image } from '@chakra-ui/react';
import { noImage, noImageDetails } from '../../assets/img/images';
import DetailsContext from '../../context/DetailContext';
import ReactImageZoom from 'react-image-zoom';

const ImgDetail = ({ data }) => {
  const initialWidth = 350;
  const [imgProps, setImgProps] = useState({
    width: initialWidth,
    zoomWidth: initialWidth,
    scale: 1.3,
    img: noImage.img,
    zoomPosition: 'original',
    zoomLensStyle: 'cursor: crosshair;',
    zoomStyle: '',
    offset: { vertical: 0, horizontal: 10 },
  });

  const [dataToShow, setDataToShow] = useState({
    id: '',
    name: '',
    category: [],
    img: noImage,
    img_500: noImageDetails,
    alt: 'alt',
    price: 0,
    typeProd: [],
    description: `Aqui va la descripcion de este producto`,
  });
  const { resData, openModal } = useContext(DetailsContext);
  // const [data, setData] = useState({});

  useEffect(() => {
    setDataToShow(resData[0]);
    // console.log(resData[0]);
  }, [resData]);

  // window.addEventListener('resize', (e) => {
  //   setAncho(window.innerWidth);
  // });

  useEffect(() => {
    setImgProps({
      width: initialWidth,
      zoomWidth: initialWidth,
      scale: 1.2,
      img: dataToShow?.img_500 ? dataToShow?.img_500.img : noImage.img,
      zoomPosition: 'original',
      zoomLensStyle: 'cursor: crosshair;',
      zoomStyle: 'cursor: crosshair;',
      offset: { vertical: 0, horizontal: 10 },
    });
  }, [dataToShow]);

  const props = {};

  return (
    <>
      {!resData[0]?.img_500?.img ? (
        ''
      ) : (
        <Box
          maxW={`${initialWidth}px`}
          // borderWidth="1px"
          onClick={openModal}
        >
          <ReactImageZoom {...imgProps} />
        </Box>
      )}
    </>
  );
};

export default ImgDetail;
