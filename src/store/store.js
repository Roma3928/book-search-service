import { configureStore } from '@reduxjs/toolkit';

import search from './slices/searchSlice';
import filters from './slices/filterSlice';
import books from './slices/booksSlice';

const store = configureStore({
  reducer: {
    search,
    filters,
    books,
  },
});

export default store;
