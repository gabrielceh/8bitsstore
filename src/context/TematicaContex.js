import { createContext, useState } from 'react';
import { getFiguresByCategory } from '../helpers/getFiguresByCategory';
import { orderCategoryByName } from '../helpers/order/orderCategoryByName';

const TematicaContext = createContext();

export const TematicaProvider = ({ children }) => {
  const [typeView, setTypeView] = useState('grid');
  const [resData, setResData] = useState([]);
  const [completeRes, setCompleteRes] = useState({});
  const [dataOrderByName, setDataOrderByName] = useState([]);

  const categoryGet = async (category, page) => {
    const res = await getFiguresByCategory(category, page);
    setCompleteRes(res);
    setResData(res.data);
    // console.log(res);
    return res;
  };

  const orderName = (data, typeOrder) => {
    const order = orderCategoryByName(data, typeOrder);
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
  };

  return <TematicaContext.Provider value={data}>{children}</TematicaContext.Provider>;
};

export default TematicaContext;
