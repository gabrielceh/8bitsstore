import { figures } from '../../data/data';

export const getProductDetails = (id) => {
  const data = figures.filter((item) => item.id === id);

  if (data.length <= 0) {
    return { status: 403, data };
  }

  return { status: 200, data };
};
