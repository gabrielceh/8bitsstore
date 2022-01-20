import React from 'react';
import { Box, Button, FormControl, Input, useToast } from '@chakra-ui/react';

import { useForm } from '../../hooks/useForm';
import { useNavigate } from 'react-router-dom';

const Search = ({ bgColor, setShowSearch }) => {
  const initialForm = {
    search: '',
  };

  const navigate = useNavigate();
  const [form, handleInputChange] = useForm(initialForm);

  const toast = useToast();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!form.search) {
      toast({
        title: `Escriba un termino a buscar`,
        variant: 'solid',
        status: 'warning',
        position: 'top',
        isClosable: true,
      });
      return;
    }
    setShowSearch(false);
    navigate(`/search?search=${form.search}&pg=1`);
  };

  return (
    <Box bg={bgColor} color="text" p={'.5rem'}>
      <form onSubmit={handleSearch}>
        <Box>
          <FormControl
            isRequired
            display={'flex'}
            justifyContent={'space-around'}
            alignItems={'center'}
            flexWrap={'wrap'}
            bg={bgColor}
          >
            <Input
              id="search"
              name="search"
              placeholder="Buscar"
              value={form.search}
              onChange={handleInputChange}
              w={'75%'}
              bg={'white'}
            />
            <Button
              isLoading={false}
              loadingText="Loading"
              colorScheme="redPrincipal"
              spinnerPlacement="start"
              size={'sm'}
              onClick={handleSearch}
            >
              Buscar 🔎
            </Button>
          </FormControl>
        </Box>
        <Box display={'flex'} justifyContent={'flex-end'} alignItems={'center'}></Box>
      </form>
    </Box>
  );
};

export default Search;
