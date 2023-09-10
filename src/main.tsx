import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './views/Home/index.tsx';

import { Route } from 'wouter';

import './assets/styles/index.css';
import Stack from './views/Stack/index.tsx';

export const routes = [
  { name: 'home', url: '/' },
  { name: 'stack', url: '/stack' },
];

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <>
      <Route path='/' component={Home} />
      <Route path='/stack' component={Stack} />
    </>
  </React.StrictMode>
);
