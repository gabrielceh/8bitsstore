import { Box } from '@chakra-ui/react';
import React from 'react';
import { MdGridView, MdList } from 'react-icons/md';

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
    <Box fontSize={'30px'}>
      {typeView === 'grid' ? (
        <MdGridView onClick={handleTypeView} cursor={'pointer'} title={'Cambiar a vista Lista'} />
      ) : (
        <MdList onClick={handleTypeView} cursor={'pointer'} title={'Cambiar a vista Grilla'} />
      )}
    </Box>
  );
};

export default ShowTypeView;
