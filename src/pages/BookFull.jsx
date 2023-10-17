import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookById } from '../store/slices/booksSlice.js';

function BookIdPage() {
  const book = useSelector((state) => state.books.book);
  const dispatch = useDispatch();
  const { id } = useParams();

  React.useEffect(() => {
    dispatch(fetchBookById(id));
  }, []);
  console.log(book);

  return <div></div>;
}

export default BookIdPage;
