import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';

import Main from './pages/Main/Main';
import FilmPage from './pages/FilmPage/FilmPage';
import Publish from './pages/Publish/Publish';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/film-item/:id' element={<FilmPage />} />
      <Route path='/publish' element={<Publish />} />
    </Routes>
  );
};

export default App;