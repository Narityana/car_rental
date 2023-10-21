import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { carsReducer } from './cars/slice';
import { pageReducer } from './pageSlice';
import { favoritesReducer } from './cars/favorites/favoritesSlice';
// import { filterReducer } from './Filter/filterSlice';

const favoritesPersistConfig = {
  key: 'favorites',
  storage,
  whitelist: ['favoritesCars'],
};

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    page: pageReducer,
    favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
    // filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
