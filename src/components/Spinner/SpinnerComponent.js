import React from 'react';
import { Spinner } from '@chakra-ui/react';

const SpinnerComponent = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        margin: '1rem auto',
      }}
    >
      <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
    </div>
  );
};

export default SpinnerComponent;
