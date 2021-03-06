import { createContext, useContext, useEffect, useState } from 'react';
import { getProductDetails } from '../helpers/details/getProductDetails';
import { useModal } from '../hooks/useModal';
import FavoriteContext from './FavoriteContext';

const DetailsContext = createContext();

const fav8bits = 'fav-8bits-store';
let initialFav = localStorage.getItem(fav8bits) ? JSON.parse(localStorage.getItem(fav8bits)) : [];

export const DetailsProvider = ({ children }) => {
  const [resData, setResData] = useState([]);
  // const [completeRes, setCompleteRes] = useState({});
  const { updateFav } = useContext(FavoriteContext);
  const [isOpen, openModal, closeModal] = useModal();

  useEffect(() => {
    initialFav = localStorage.getItem(fav8bits) ? JSON.parse(localStorage.getItem(fav8bits)) : [];
  }, [updateFav]);

  const productGet = async (category, page) => {
    const res = await getProductDetails(category, page);
    const local = initialFav.map((item) => item);

    if (local.length <= 0) {
      // setCompleteRes(res);
      setResData(res.data);
      return res;
    }

    const resLocal = res.data.map((item) => {
      let el;
      for (let l of local) {
        if (l.id === item.id) {
          el = l;
          // console.log('true', el);
          break;
        } else {
          el = { ...item, isFav: false };
          // console.log('false', el);
        }
      }

      return el;
    });
    // console.log(resLocal);
    // setCompleteRes({ ...res, data: resLocal });
    setResData(resLocal);
    return resLocal;
  };

  const data = {
    productGet,
    resData,
    isOpen,
    openModal,
    closeModal,
  };

  return <DetailsContext.Provider value={data}>{children}</DetailsContext.Provider>;
};

export default DetailsContext;
