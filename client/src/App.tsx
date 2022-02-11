import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';

import Main from './pages/Main/Main';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
    </Routes>
  );
};

export default App;