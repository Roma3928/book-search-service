import Main from '../pages/Main';
import Erorr from '../pages/Error';
import BookFull from '../pages/BookFull';
import MainLayout from '../layouts/MainLayout';

export const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: '/book/:id',
        element: <BookFull />,
      },
      {
        path: '*',
        element: <Erorr />,
      },
    ],
  },
];
