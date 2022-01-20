import { createContext, useContext, useEffect, useState } from 'react';
import { getFavorites } from '../helpers/favorites/getFavorites';
import { orderDataByName } from '../helpers/order/orderCategoryByName';
import { orderDataByPrice } from '../helpers/order/orderCategoryByPrice';
import FavoriteContext from './FavoriteContext';

const FavViewContext = createContext();

const fav8bits = 'fav-8bits-store';
let initialFav = localStorage.getItem(fav8bits) ? JSON.parse(localStorage.getItem(fav8bits)) : [];

export const FavViewProvider = ({ children }) => {
  const [typeView, setTypeView] = useState('grid');
  const [resData, setResData] = useState([]); //Muestra los items
  const [completeRes, setCompleteRes] = useState({}); //Muestra la respuesta completa
  const [dataOrderByName, setDataOrderByName] = useState([]);
  const [dataOrderByPrice, setDataOrderByPrice] = useState([]);

  const { updateFav } = useContext(FavoriteContext);

  useEffect(() => {
    initialFav = localStorage.getItem(fav8bits) ? JSON.parse(localStorage.getItem(fav8bits)) : [];
  }, [updateFav]);

  const resGetFav = async (page) => {
    const res = await getFavorites(page);
    const local = initialFav.map((item) => item);

    const resLocal = res.data.map((item) => {
      let el;
      for (let l of local) {
        if (l.id === item.id) {
          el = l;
          break;
        } else {
          el = { ...item, isFav: false };
        }
      }
      return el;
    });
    setCompleteRes({ ...res, data: resLocal });
    setResData(resLocal);
    return res;
  };

  const orderName = (data, typeOrder) => {
    const order = orderDataByName(data, typeOrder);
    setDataOrderByName(order);
  };

  const orderPrice = (data, typeOrder) => {
    const order = orderDataByPrice(data, typeOrder);
    setDataOrderByName(order);
  };

  const data = {
    resGetFav,
    orderName,
    orderPrice,
    completeRes,
    resData,
    setResData,
    typeView,
    setTypeView,
    setDataOrderByName,
    dataOrderByName,
    dataOrderByPrice,
    setDataOrderByPrice,
  };
  return <FavViewContext.Provider value={data}>{children}</FavViewContext.Provider>;
};

export default FavViewContext;
