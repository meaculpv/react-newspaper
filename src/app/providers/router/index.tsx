import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '@/pages/home';
import { NewsPage } from '@/pages/news';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/news',
    element: <NewsPage />,
    children: [
      {
        path: '/news/:id',
        element: <NewsPage />,
      },
    ],
  },
]);
