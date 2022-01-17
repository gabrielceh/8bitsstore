import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Tematica from '../components/Tematicas/Tematica';
import TematicasView from '../views/TematicasView';

const TematicasRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TematicasView />} />
      <Route path="/comics" element={<Tematica />} />
      <Route path="/manga-anime" element={<Tematica />} />
      <Route path="/videogames" element={<Tematica />} />
      <Route path="/movies-series" element={<Tematica />} />
      <Route path="/others" element={<Tematica />} />
    </Routes>
  );
};

export default TematicasRoutes;
