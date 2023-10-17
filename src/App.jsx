import React from 'react';

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import Main from './pages/Main';
import Erorr from './pages/Error';
import BookFull from './pages/BookFull';
import MainLayout from './layouts/MainLayout';

import { routes } from './router';

function App() {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

export default App;
