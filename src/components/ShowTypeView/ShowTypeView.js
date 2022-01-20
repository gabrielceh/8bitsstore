import { Box } from '@chakra-ui/react';
import React from 'react';
import { MdList } from 'react-icons/md';
import { BiGridHorizontal } from 'react-icons/bi';

const ShowTypeView = ({ typeView, setTypeView }) => {
  const handleTypeView = (e) => {
    if (typeView === 'grid') {
      setTypeView('list');
      return;
    }
    if (typeView === 'list') {
      setTypeView('grid');
    }
  };

  return (
    <Box fontSize={'40px'}>
      {typeView === 'grid' ? (
        <BiGridHorizontal
          onClick={handleTypeView}
          cursor={'pointer'}
          title={'Cambiar a vista Lista'}
        />
      ) : (
        <MdList onClick={handleTypeView} cursor={'pointer'} title={'Cambiar a vista Grilla'} />
      )}
    </Box>
  );
};

export default ShowTypeView;
