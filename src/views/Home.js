import React, { useEffect } from 'react';
import Banner from '../components/Banner/Banner';
import NavbarComponent from '../components/Navbar/NavbarComponent';

const Home = () => {
  useEffect(() => {
    document.title = `8 Bits Store bq - Home`;
  }, []);

  return (
    <>
      <Banner />
    </>
  );
};

export default Home;
