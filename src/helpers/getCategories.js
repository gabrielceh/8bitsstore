import { dataCategories } from '../data/dataCategories';

export const getCategories = () => {
  return dataCategories.filter((category) => category.active === true);
};
