import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64be5da45ee688b6250c46d7.mockapi.io';

export const fetchCarsFirst = createAsyncThunk(
  'cars/fetchFirstPage',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/adverts', {
        params: {
          page: 1,
          limit: 8,
        },
      });
      return response.data;
    } catch (error) {
      console.log('error');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchCarsNext = createAsyncThunk(
  'cars/fetchNextPage',
  async ({ page }, thunkAPI) => {
    try {
      const response = await axios.get('/adverts', {
        params: {
          page: page,
          limit: 8,
        },
      });
      console.log(page);
      return response.data;
    } catch (error) {
      console.log('error');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchCarById = createAsyncThunk(
  'cars/fetchOne',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts/:${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
