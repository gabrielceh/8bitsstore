import { createContext, useState } from 'react';
import { getFiguresByCategory } from '../helpers/getFiguresByCategory';

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const categoryGet = async (category, page) => {
    const res = await getFiguresByCategory(category, page);
    return res;
  };

  const data = { categoryGet };

  return <CategoryContext.Provider value={data}>{children}</CategoryContext.Provider>;
};

export default CategoryContext;
