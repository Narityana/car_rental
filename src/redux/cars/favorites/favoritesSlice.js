import { createSlice } from '@reduxjs/toolkit';

const initialState = { favoritesList: [] };

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,

  reducers: {
    addToFavorites: (state, action) => {
      state.favoritesList.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      return state.favoritesList.filter(car => car.id !== action.payload.id);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
