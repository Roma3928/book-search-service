import React from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Sort from './components/Sort/Sort';
import Categories from './components/Categories/Categories';
import Loader from './components/UI/Loader/Loader';
import BookСard from './components/BookСard/BookСard';
import BookService from './API/BookService.js';
import { useFetching } from './hooks/useFetching.js';

function App() {
  const [books, setBooks] = React.useState([]);
  const [search, setSearch] = React.useState('');

  const [fetchBooks, isBooksLoading, bookError] = useFetching(async () => {
    const booksData = await BookService.getAll(search);
    console.log(booksData);
    setBooks(booksData.items);
  });

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Search search={search} setSearch={setSearch} fetchBooks={fetchBooks} />
            <Sort />
          </div>
          {isBooksLoading && (
            <div className="loader-box">
              <Loader />
            </div>
          )}
          <div className="content__bottom">
            {books.map((book) => {
              let thumbnail =
                book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
              if (thumbnail != undefined) {
                return (
                  <BookСard
                    key={book.id}
                    photo={thumbnail}
                    category={book.volumeInfo.categories}
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
