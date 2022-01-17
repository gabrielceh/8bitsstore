import { figures } from '../data/data';
import { validCategories } from '../data/dataCategories';

const getFiguresByCategory = (category) => {
  console.log('category:', category);

  if (!validCategories.includes(category)) {
    console.log(`${category} is not a valid category`);
    return { status: 404, data: [] };
  }

  const data = figures.filter((fig) => fig.category.includes(category));

  return { status: 200, data };
};

export { getFiguresByCategory };
