import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: {
    name: 'все',
    categoryProperty: 'all',
  },
  sort: {
    name: 'популярности',
    sortProperty: 'relevance',
  },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
  },
});

export const { setCategory, setSort } = filterSlice.actions;

export default filterSlice.reducer;
