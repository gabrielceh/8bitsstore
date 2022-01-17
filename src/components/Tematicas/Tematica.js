import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import BreadcrumbComponent from '../BreadcrumbComponent/BreadcrumbComponent';

const Tematica = () => {
  const location = useLocation();
  let loc = location.pathname.split('/');
  const [route, setRoute] = useState(loc[-1]);

  return <></>;
};

export default Tematica;
