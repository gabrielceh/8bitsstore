import { figures } from '../../data/data';

const getNew = async () => {
  const data = await figures.map((fig) => fig);

  if (data.length <= 0) {
    return { status: 400, data };
  }

  let dataToSend = [];

  for (let i = 0; i < 16; i++) {
    if (!data[i]) break;
    dataToSend.push(data[i]);
  }

  return { status: 200, data: dataToSend };
};

export { getNew };
