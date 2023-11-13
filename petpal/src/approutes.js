import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import Anunciate from './components/anunciate';

const AppR = () => {
  return (
    <Routes>
        <Route path="/perfil" element={<App />}/>
        <Route path="/anunciate" element={<Anunciate />}/>
    </Routes>
  );
};

export default AppR;
