import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Tematica from '../components/Tematicas/Tematica';
import TematicasView from '../views/TematicasView';
import Page404 from '../views/Page404';
import { CategoryProvider } from '../context/CategoryContex';

const TematicasRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TematicasView />} />

      <Route
        path="/comics"
        element={
          <CategoryProvider>
            <Tematica />
          </CategoryProvider>
        }
      />
      <Route
        path="/manga-anime"
        element={
          <CategoryProvider>
            <Tematica />
          </CategoryProvider>
        }
      />
      <Route
        path="/videogames"
        element={
          <CategoryProvider>
            <Tematica />
          </CategoryProvider>
        }
      />
      <Route
        path="/movies-series"
        element={
          <CategoryProvider>
            <Tematica />
          </CategoryProvider>
        }
      />
      <Route
        path="/others"
        element={
          <CategoryProvider>
            <Tematica />
          </CategoryProvider>
        }
      />
      <Route path="/*" element={<Page404 />} />
    </Routes>
  );
};

export default TematicasRoutes;
