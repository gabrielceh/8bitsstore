import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Tematica from '../components/Tematicas/Tematica';
import TematicasView from '../views/TematicasView';
import Page404 from '../views/Page404';
import { TematicaProvider } from '../context/TematicaContex';

const TematicasRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TematicasView />} />

      <Route
        path="/comics"
        element={
          <TematicaProvider>
            <Tematica />
          </TematicaProvider>
        }
      />
      <Route
        path="/manga-anime"
        element={
          <TematicaProvider>
            <Tematica />
          </TematicaProvider>
        }
      />
      <Route
        path="/videogames"
        element={
          <TematicaProvider>
            <Tematica />
          </TematicaProvider>
        }
      />
      <Route
        path="/movies-series"
        element={
          <TematicaProvider>
            <Tematica />
          </TematicaProvider>
        }
      />
      <Route
        path="/others"
        element={
          <TematicaProvider>
            <Tematica />
          </TematicaProvider>
        }
      />
      <Route path="/*" element={<Page404 />} />
    </Routes>
  );
};

export default TematicasRoutes;
