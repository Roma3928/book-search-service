import React, { useCallback } from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Sort from './components/Sort/Sort';
import Categories from './components/Categories/Categories';
import Loader from './components/UI/Loader/Loader';
import BookСard from './components/BookСard/BookСard';
import BookService from './API/BookService.js';
import { useFetching } from './hooks/useFetching.js';
import PaginationButton from './components/PaginationButton/PaginationButton';

import noPhoto from './assets/img/no-photo.svg';

function App() {
  const [books, setBooks] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [booksTotalItems, setBooksTotalItems] = React.useState(0);

  const [startIndex, setStartIndex] = React.useState(30);
  const [limit, setLimit] = React.useState(10);

  const [fetchBooksToSearch, isBooksLoadingForSearch, booksErrorForSearch] = useFetching(
    async () => {
      const booksData = await BookService.getAll(searchValue);
      setBooks(booksData.items);
      setBooksTotalItems(booksData.totalItems);
    },
  );

  const [fetchBooksForPagination, isBooksLoadingForPagination, booksErrorForPagination] =
    useFetching(async () => {
      const booksData = await BookService.getAll(searchValue, startIndex, limit);
      setBooks((oldBooks) => [...oldBooks, ...booksData.items]);
    });

  const showMore = () => {
    setStartIndex(startIndex + 30);
    fetchBooksForPagination();
  };

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Search
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              fetchBooksToSearch={fetchBooksToSearch}
              setBooks={setBooks}
              setBooksTotalItems={setBooksTotalItems}
            />
            <Sort />
          </div>
          {isBooksLoadingForSearch && (
            <div className="loader-box">
              <Loader />
            </div>
          )}
          {booksErrorForSearch ? (
            <p className="error-box">Произошла ошибка!</p>
          ) : (
            <p className="counter-box">
              Количество найденных книг: <span>{booksTotalItems}</span>
            </p>
          )}
          <div className="content__bottom">
            {booksTotalItems > 0 &&
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
          {isBooksLoadingForPagination && (
            <div className="loader-box">
              <Loader />
            </div>
          )}
          {booksErrorForPagination && <p className="error-box">Произошла ошибка!</p>}
          {startIndex < booksTotalItems && (
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
