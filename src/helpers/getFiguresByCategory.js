import { figures } from '../data/data';
import { validCategories } from '../data/dataCategories';

const getFiguresByCategory = async (category, page = 1) => {
  if (!validCategories.includes(category)) {
    // console.log(`${category} is not a valid category`);
    return { status: 404, data: [], minPage: 1, maxPage: 1 };
  }

  const data = await figures.filter((fig) => fig.category.includes(category));

  const itemPerPage = 5;
  let lastPage = Math.ceil(data.length / itemPerPage);
  // console.log(lastPage);
  let dataToSend = [];

  let initial = itemPerPage * page - itemPerPage;

  for (let i = initial; i < itemPerPage * page; i++) {
    if (!data[i]) break;
    dataToSend.push(data[i]);
  }

  return { status: 200, data: dataToSend, minPage: 1, maxPage: lastPage };
};

export { getFiguresByCategory };
