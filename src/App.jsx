import React from 'react';

import { Route, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import Main from './pages/Main';
import Erorr from './pages/Error';
import BookFull from './pages/BookFull';
import MainLayout from './layouts/MainLayout';

function App() {
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path={routes.rootPage} element={<Layout />} errorElement={<ErrorPage />}>
  //       <Route i ndex element={<HomePage />} />
  //       <Route path={routes.bookList} element={<BookListPage />} />
  //       <Route path={`${routes.bookPage}/:id`} element={<BookPage />} />
  //     </Route>,
  //   ),
  // );
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Main />} />
        <Route path="/book/:id" element={<BookFull />} />
        <Route path="*" element={<Erorr />} />
      </Route>
    </Routes>
  );
}

export default App;
