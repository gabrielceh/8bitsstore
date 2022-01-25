import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../views/Home';
import NavbarComponent from '../components/Navbar/NavbarComponent';
import Page404 from '../views/Page404';
import NuevoView from '../views/NuevoView';
import FavoritosView from '../views/FavoritosView';
import ContactoView from '../views/ContactoView';
import TematicasRoutes from './TematicasRoutes';
import Footer from '../components/Footer/Footer';
import SearchView from '../views/SearchView';
import { SearchProvider } from '../context/SearchContext';
import { FavViewProvider } from '../context/FavViewContext';
import { NewProvider } from '../context/NewContext';
import ProductDetailsView from '../views/ProductDetailsView';
import { DetailsProvider } from '../context/DetailContext';
import BtnUp from '../components/BtnUp/BtnUp';

const AppRoutes = () => {
  const location = useLocation();
  let loc = location.pathname.split('/');
  // console.log(location);
  let path = '';

  const breadCrumb = loc.map((item, i) =>
    item !== ''
      ? { id: i, label: item, path: (path += `/${item}`) }
      : item === '' && { id: i, label: 'Home', path: '/' }
  );
  // console.log(breadCrumb);
  return (
    <>
      <NavbarComponent breadCrumb={breadCrumb} />
      <BtnUp />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/nuevo"
          element={
            <NewProvider>
              <NuevoView />
            </NewProvider>
          }
        />
        <Route path="/tematica/*" element={<TematicasRoutes />} />
        <Route
          path="/favoritos"
          element={
            <FavViewProvider>
              <FavoritosView />
            </FavViewProvider>
          }
        />
        <Route path="/contacto" element={<ContactoView />} />
        <Route
          path="/details/*"
          element={
            <DetailsProvider>
              <ProductDetailsView />
            </DetailsProvider>
          }
        />
        <Route
          path="/search"
          element={
            <SearchProvider>
              <SearchView />
            </SearchProvider>
          }
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;
