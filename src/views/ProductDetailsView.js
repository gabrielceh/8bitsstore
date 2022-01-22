import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DetailsContext from '../context/DetailContext';
import queryString from 'query-string';
import ImgDetail from '../components/ProductDetail/ImgDetail';

const ProductDetailsView = () => {
  const location = useLocation();
  const { qid } = queryString.parse(location.search);
  const [data, setData] = useState({});

  const { productGet } = useContext(DetailsContext);

  useEffect(() => {
    const req = async () => {
      const res = await productGet(qid);
      console.log(res);
      setData(res.data[0]);
    };
    req();
  }, [qid]);

  return (
    <div>
      <ImgDetail data={data} />
    </div>
  );
};

export default ProductDetailsView;
