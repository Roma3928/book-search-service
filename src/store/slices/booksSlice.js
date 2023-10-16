import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import BookService from '../../API/BookService';
import { getUniqueList } from '../../utils/books';

const initialState = {
  isLoading: false,
  error: false,
  startIndex: 30,
  totalItems: 0,
  bookId: '',
  books: [],
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (params) => {
  const { searchValue, filters } = params;
  return await BookService.getAll(searchValue, filters);
});

export const fetchShowMoreBooks = createAsyncThunk('books/fetchShowMoreBooks', async (params) => {
  const { searchValue, filters, startIndex } = params;
  return await BookService.getAll(searchValue, filters, startIndex);
});

const booksSlice = createSlice({
  name: 'books',
  initialState,

  reducers: {
    setBooks(state, action) {
      state.books = action.payload;
    },
    setTotalItems(state, action) {
      state.totalItems = action.payload;
    },
    setStartIndex(state, action) {
      state.startIndex = action.payload;
    },
    setBookId(state, action) {
      state.bookId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
        state.books = [];
        state.totalItems = 0;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.totalItems = action.payload.totalItems;
        state.books = getUniqueList(action.payload.items);
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
        state.books = [];
      })
      .addCase(fetchShowMoreBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchShowMoreBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload && action.payload.items) {
          state.books = getUniqueList([...state.books, ...action.payload.items]);
        }
      })
      .addCase(fetchShowMoreBooks.rejected, (state) => {
        state.loadingStatus = false;
        state.error = true;
      });
  },
});

export const { setBooks, setTotalItems, setStartIndex, setBookId } = booksSlice.actions;
export default booksSlice.reducer;
