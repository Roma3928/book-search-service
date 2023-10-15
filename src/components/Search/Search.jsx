import React from 'react';
import styles from './Search.module.scss';

function Search({ searchValue, setSearchValue, fetchBooksToSearch, setBooks, setBooksTotalItems }) {
  const searchButtonRef = React.useRef();

  const searchBooks = (event) => {
    if (event.key === 'Enter' || searchButtonRef.current === event.target) {
      if (searchValue !== '') {
        fetchBooksToSearch();
      } else {
        setBooks([]);
        setBooksTotalItems(0);
      }
    }
  };

  return (
    <div className={styles.search}>
      <svg
        ref={searchButtonRef}
        onClick={searchBooks}
        className={styles.search__icon}
        width="800px"
        height="800px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <input
        className={styles.search__input}
        placeholder="Поиск книги..."
        values={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyUp={searchBooks}
      />
    </div>
  );
}

export default Search;
