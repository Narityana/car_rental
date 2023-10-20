import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFetchAllFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  if (state.page === 1) {
    state.cars = action.payload;
  } else {
    state.cars = [...state.cars, ...action.payload];
  }
};
// const handleFetchOneFullfilld = (state, action) => {
//   state.isLoading = false;
//   state.error = null;
//   state.cars = action.payload;
// };

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
    isLoading: false,
    error: null,
    page: 0,
  },

  extraReducers: builder =>
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, handleFetchAllFulfilled)
      .addCase(fetchCars.rejected, handleRejected),
  //   .addCase(addContact.pending, handlePending)
  //   .addCase(addContact.fulfilled, handleAddContactFulfield)
  //   .addCase(addContact.rejected, handleRejected)
  //   .addCase(deleteContact.pending, handlePending)
  //   .addCase(deleteContact.fulfilled, handleDeleteContactFulfield)
  //   .addCase(deleteContact.rejected, handleRejected),
});

export const carsReducer = carsSlice.reducer;
