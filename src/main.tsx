import React from 'react';
import ReactDOM from 'react-dom/client';
import { router } from './app/providers/router';
import { RouterProvider } from 'react-router-dom';
import '@/app/styles/main.scss';
import { Header } from './widgets/header';
import { Footer } from './widgets/footer';
import axios from 'axios';
import { Provider } from 'react-redux';
import { store } from './app/providers/store';

axios.defaults.baseURL = 'http://localhost:8000';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </Provider>
);
