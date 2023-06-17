import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './views/Home/index.tsx';

import { Route } from 'wouter';

import './assets/styles/index.css';

export const routes = [{ name: 'home', url: '/' }];

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <>
      <Route path='/' component={Home} />
    </>
  </React.StrictMode>
);
