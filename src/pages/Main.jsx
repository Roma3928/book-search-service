import React from 'react';
import Search from '../components/Search/Search';
import Sort from '../components/Sort/Sort';
import Categories from '../components/Categories/Categories';
import Loader from '../components/UI/Loader/Loader';
import PaginationButton from '../components/PaginationButton/PaginationButton';
import BooksList from '../components/BooksList/BooksList';

import { useSelector, useDispatch } from 'react-redux';

import { fetchBooks, fetchShowMoreBooks, setStartIndex } from '../store/slices/booksSlice.js';

function Main() {
  const searchValue = useSelector((state) => state.search.searchValue);
  const filters = useSelector((state) => state.filters);
  const { books, startIndex, totalItems, isLoading, error } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const showMore = () => {
    dispatch(setStartIndex(startIndex + 30));
    dispatch(fetchShowMoreBooks({ searchValue, filters, startIndex }));
    console.log(books.length);
  };

  React.useEffect(() => {
    totalItems > 0 && dispatch(fetchBooks({ searchValue, filters }));
  }, [filters]);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Search />
        <Sort />
      </div>
      {error && <p className="error-box">Произошла ошибка!</p>}

      {totalItems >= 0 && (
        <p className="counter-box">
          Количество найденных книг: <span>{totalItems}</span>
        </p>
      )}

      <BooksList />
      {isLoading && (
        <div className="loader-box">
          <Loader />
        </div>
      )}
      {books.length < totalItems && (
        <div className="pagination-box">
          <PaginationButton showMore={showMore} />
        </div>
      )}
    </>
  );
}

export default Main;
