import { createSlice } from '@reduxjs/toolkit';

const initialState = { favoritesList: [] };

const favoritesSlice = createSlice({
  name: 'favoritesList',
  initialState,

  reducers: {
    addToFavorites: (state, action) => {
      state.favoritesList.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.favoritesList = state.favoritesList.filter(
        car => car.id !== action.payload.id
      );
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
