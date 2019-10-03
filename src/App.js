import React from 'react';

import Home from './Routes/Home/Home';

import './global.css';

import {BrowserRouter} from 'react-router-dom';

import Router from './routes';

function App() {
  return (
    <BrowserRouter>
      <Router></Router>
    </BrowserRouter>
  );
}

export default App;
