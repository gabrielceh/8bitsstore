import { figures } from '../../data/data';

export const getSearch = (search, page = 1) => {
  let s = search.toLocaleLowerCase();

  const searchItem = figures.filter(
    (item) =>
      item?.name.toLocaleLowerCase().includes(s) ||
      item?.category.find((el) => el.toLocaleLowerCase().includes(s)) ||
      item?.typeProd.find((el) => el.toLocaleLowerCase().includes(s))
  );
  // console.log(searchItem);

  if (searchItem.length <= 0) {
    return { status: 400, data: searchItem, minPage: 1, maxPage: 1, total: searchItem.length };
  }

  const itemPerPage = 16;
  let lastPage = Math.ceil(searchItem.length / itemPerPage);
  // console.log(lastPage);
  let dataToSend = [];

  let initial = itemPerPage * page - itemPerPage;

  for (let i = initial; i < itemPerPage * page; i++) {
    if (!searchItem[i]) break;
    dataToSend.push(searchItem[i]);
  }

  return { status: 200, data: dataToSend, minPage: 1, maxPage: lastPage, total: searchItem.length };
};
