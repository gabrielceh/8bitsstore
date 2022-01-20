import { useToast } from '@chakra-ui/react';
import { createContext, useEffect, useState } from 'react';

const FavoriteContext = createContext();

const fav8bits = 'fav-8bits-store';

let initialFav = localStorage.getItem(fav8bits) ? JSON.parse(localStorage.getItem(fav8bits)) : [];

export const FavoriteProvider = ({ children }) => {
  const [updateFav, setUpdateFav] = useState(false);

  const toast = useToast();

  useEffect(() => {
    initialFav = localStorage.getItem(fav8bits) ? JSON.parse(localStorage.getItem(fav8bits)) : [];
  }, [updateFav]);

  const addFavorite = (item) => {
    const searchData = initialFav.find((el) => el.id === item.id);
    if (searchData) {
      toast({
        title: `El elemento ya esta en la lista de favoritos`,
        variant: 'solid',
        status: 'warning',
        position: 'top',
        isClosable: true,
      });
      return;
    }
    const addData = [...initialFav, { ...item, isFav: true }];
    localStorage.setItem(fav8bits, [JSON.stringify(addData)]);
    setUpdateFav(!updateFav);
    toast({
      title: `${item.name} agregada a la lista de favoritos 💔`,
      variant: 'solid',
      status: 'success',
      position: 'top',
      isClosable: true,
    });
  };

  const deleteFavorite = (item) => {
    const searchData = initialFav.filter((el) => el.id !== item.id);
    localStorage.setItem(fav8bits, JSON.stringify([...searchData]));
    setUpdateFav(!updateFav);
    toast({
      title: `${item.name} ya no se encuentra en la lista de favoritos 💔`,
      variant: 'solid',
      status: 'success',
      position: 'top',
      isClosable: true,
    });
  };

  const data = {
    updateFav,
    addFavorite,
    deleteFavorite,
  };

  return <FavoriteContext.Provider value={data}>{children}</FavoriteContext.Provider>;
};

export default FavoriteContext;
