export const orderCategoryByName = (data = [], order = 'Asc') => {
  // console.log(data);

  if (data.length <= 0) {
    // console.log({ status: 404, data: [], minPage: 1, maxPage: 1 });
    return { status: 404, data: [], minPage: 1, maxPage: 1 };
  }
  const dataArray = data.map((item) => item);

  if (order === 'Asc') {
    const orderByName = (v1, v2) => {
      if (v1.name < v2.name) return -1;
      if (v1.name > v2.name) return 1;
    };

    return dataArray.sort(orderByName);
  }

  if (order === 'Des') {
    const orderByName = (v1, v2) => {
      if (v1.name < v2.name) return 1;
      if (v1.name > v2.name) return -1;
    };

    return dataArray.sort(orderByName);
  }
};
