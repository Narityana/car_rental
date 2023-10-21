import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],

  reducers: {
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      return state.favorites.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
