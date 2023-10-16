import React from 'react';
import styles from './Search.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchValue } from '../../store/slices/searchSlice.js';
import { fetchBooks, setBooks, setTotalItems } from '../../store/slices/booksSlice.js';

function Search({}) {
  const searchButtonRef = React.useRef();
  const searchValue = useSelector((state) => state.search.searchValue);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const searchBooks = (event) => {
    if (event.key === 'Enter' || searchButtonRef.current === event.target) {
      if (searchValue !== '') {
        dispatch(fetchBooks({ searchValue, filters }));
      } else {
        dispatch(setBooks([]));
        dispatch(setTotalItems(0));
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
        onChange={(e) => dispatch(setSearchValue(e.target.value))}
        onKeyUp={searchBooks}
      />
    </div>
  );
}

export default Search;
