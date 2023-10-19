import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64be5da45ee688b6250c46d7.mockapi.io';

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/adverts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);