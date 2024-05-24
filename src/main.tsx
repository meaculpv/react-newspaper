import React from 'react';
import ReactDOM from 'react-dom/client';
import { router } from './app/providers/router';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import '@/app/styles/main.scss';
import { Header } from './widgets/header';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);
