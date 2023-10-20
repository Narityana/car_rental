import { createSlice } from '@reduxjs/toolkit';

const pageSlice = createSlice({
  name: 'page',
  initialState: 1, // Початкова сторінка
  reducers: {
    setPage: (state, action) => {
      return action.payload;
    },
  },
});

export const { setPage } = pageSlice.actions;
// export default pageSlice.reducer;
export const pageReducer = pageSlice.reducer;
