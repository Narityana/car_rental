import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    make: '',
    price: '',
    minMileage: '',
    maxMileag: '',
  },
  reducers: {
    setFilter(state, action) {
      state.make = action.payload.make;
      state.price = action.payload.price;
      state.minMileage = action.payload.minMileage;
      state.maxMileag = action.payload.maxMileage;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
