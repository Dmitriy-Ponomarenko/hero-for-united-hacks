// src/main.jsx

import React, { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components/App';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
