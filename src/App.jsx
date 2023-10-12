import React from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Sort from './components/Sort/Sort';
import Categories from './components/Categories/Categories';
import BookСard from './components/BookСard/BookСard';

function App() {
  const [books, setBooks] = React.useState([]);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Search setBooks={setBooks} />
            <Sort />
          </div>
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
