import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';

import Main from './pages/Main/Main';
import FilmPage from './pages/FilmPage/FilmPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/film-item/:id' element={<FilmPage />} />
    </Routes>
  );
};

export default App;