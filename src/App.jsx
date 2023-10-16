import React from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Sort from './components/Sort/Sort';
import Categories from './components/Categories/Categories';
import Loader from './components/UI/Loader/Loader';
import BookСard from './components/BookСard/BookСard';
import PaginationButton from './components/PaginationButton/PaginationButton';
import { useSelector, useDispatch } from 'react-redux';

import { fetchBooks, fetchShowMoreBooks, setStartIndex } from './store/slices/booksSlice.js';

import noPhoto from './assets/img/no-photo.svg';

function App() {
  const searchValue = useSelector((state) => state.search.searchValue);
  const filters = useSelector((state) => state.filters);
  const { books, startIndex, totalItems, isLoading, error } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const showMore = () => {
    dispatch(setStartIndex(startIndex + 30));
    dispatch(fetchShowMoreBooks({ searchValue, filters, startIndex }));
  };

  React.useEffect(() => {
    totalItems > 0 && dispatch(fetchBooks({ searchValue, filters }));
  }, [filters]);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Search />
            <Sort />
          </div>
          {error ? (
            <p className="error-box">Произошла ошибка!</p>
          ) : (
            <p className="counter-box">
              Количество найденных книг: <span>{totalItems}</span>
            </p>
          )}
          <div className="content__bottom">
            {totalItems > 0 &&
              books.map((book) => (
                <BookСard
                  key={book.id}
                  photo={
                    book.volumeInfo.imageLinks?.thumbnail
                      ? book.volumeInfo.imageLinks.thumbnail
                      : noPhoto
                  }
                  category={book.volumeInfo.categories?.[0]}
                  title={book.volumeInfo.title}
                  author={book.volumeInfo?.authors?.join(', ')}
                />
              ))}
          </div>
          {isLoading && (
            <div className="loader-box">
              <Loader />
            </div>
          )}
          {error && <p className="error-box">Произошла ошибка!</p>}
          {startIndex < totalItems && (
            <div className="pagination-box">
              <PaginationButton showMore={showMore} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
