export const orderCategoryByPrice = (data = [], order = 'Asc') => {
  // console.log(data);

  if (data.length <= 0) {
    // console.log({ status: 404, data: [], minPage: 1, maxPage: 1 });
    return { status: 404, data: [], minPage: 1, maxPage: 1 };
  }
  const dataArray = data.map((item) => item);

  if (order === 'Asc') {
    const orderByPrice = (v1, v2) => {
      if (v1.price < v2.price) return -1;
      if (v1.price > v2.price) return 1;
    };

    return dataArray.sort(orderByPrice);
  }

  if (order === 'Des') {
    const orderByPrice = (v1, v2) => {
      if (v1.price < v2.price) return 1;
      if (v1.price > v2.price) return -1;
    };

    return dataArray.sort(orderByPrice);
  }
};
