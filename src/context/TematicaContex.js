import { createContext, useContext, useEffect, useState } from 'react';
import { getFiguresByCategory } from '../helpers/getFiguresByCategory';
import { orderDataByName } from '../helpers/order/orderCategoryByName';
import { orderDataByPrice } from '../helpers/order/orderCategoryByPrice';
import FavoriteContext from './FavoriteContext';

const TematicaContext = createContext();

const fav8bits = 'fav-8bits-store';
let initialFav = localStorage.getItem(fav8bits) ? JSON.parse(localStorage.getItem(fav8bits)) : [];

export const TematicaProvider = ({ children }) => {
  const [typeView, setTypeView] = useState('grid');
  const [resData, setResData] = useState([]);
  const [completeRes, setCompleteRes] = useState({});
  const [dataOrderByName, setDataOrderByName] = useState([]);
  const [dataOrderByPrice, setDataOrderByPrice] = useState([]);
  const { updateFav } = useContext(FavoriteContext);

  useEffect(() => {
    initialFav = localStorage.getItem(fav8bits) ? JSON.parse(localStorage.getItem(fav8bits)) : [];
  }, [updateFav]);

  const categoryGet = async (category, page) => {
    const res = await getFiguresByCategory(category, page);
    const local = initialFav.map((item) => item);

    if (local.length <= 0) {
      setCompleteRes(res);
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
    completeRes,
    resData,
    setResData,
    categoryGet,
    typeView,
    setTypeView,
    orderName,
    setDataOrderByName,
    dataOrderByName,
    dataOrderByPrice,
    setDataOrderByPrice,
    orderPrice,
  };

  return <TematicaContext.Provider value={data}>{children}</TematicaContext.Provider>;
};

export default TematicaContext;
