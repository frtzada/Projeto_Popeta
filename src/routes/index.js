import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Shows from '../pages/Shows';
import Ingressos from '../pages/Ingressos';
import Sobre from '../pages/Sobre';
import Contato from '../pages/Contato';
import NotFound from '../pages/NotFound';
import Admin from '../pages/Admin';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'shows',
          element: <Shows />,
        },
        {
          path: 'ingressos',
          element: <Ingressos />,
        },
        {
          path: 'sobre',
          element: <Sobre />,
        },
        {
          path: 'contato',
          element: <Contato />,
        },
        {
          path: 'admin',
          element: <Admin />,
        },
        {
          path: '*',
          element: <NotFound />,
        },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  }
);

export default router; 