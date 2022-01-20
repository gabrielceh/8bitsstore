export const getFavorites = (page = 1) => {
  const fav8bits = 'fav-8bits-store';
  let initialFav = localStorage.getItem(fav8bits) ? JSON.parse(localStorage.getItem(fav8bits)) : [];

  if (initialFav.length <= 0) {
    return { status: 400, data: initialFav, minPage: 1, maxPage: 1, total: initialFav.length };
  }

  const itemPerPage = 16;
  let lastPage = Math.ceil(initialFav.length / itemPerPage);
  // console.log(lastPage);
  let dataToSend = [];

  let initial = itemPerPage * page - itemPerPage;

  for (let i = initial; i < itemPerPage * page; i++) {
    if (!initialFav[i]) break;
    dataToSend.push(initialFav[i]);
  }

  return { status: 200, data: dataToSend, minPage: 1, maxPage: lastPage, total: initialFav.length };
};
