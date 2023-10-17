import Main from '../pages/Main';
import Erorr from '../pages/Error';
import BookPage from '../pages/BookPage/BookPage';
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
        element: <BookPage />,
      },
      {
        path: '*',
        element: <Erorr />,
      },
    ],
  },
];
