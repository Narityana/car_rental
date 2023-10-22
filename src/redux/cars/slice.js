import { createSlice } from '@reduxjs/toolkit';
import { fetchCarsFirst, fetchCarsNext } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFetchFirstFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.cars = action.payload;
};

const handleFetchNextFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.cars = [...state.cars, ...action.payload];
};
const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder =>
    builder
      .addCase(fetchCarsFirst.pending, handlePending)
      .addCase(fetchCarsFirst.fulfilled, handleFetchFirstFulfilled)
      .addCase(fetchCarsFirst.rejected, handleRejected)

      .addCase(fetchCarsNext.pending, handlePending)
      .addCase(fetchCarsNext.fulfilled, handleFetchNextFulfilled)
      .addCase(fetchCarsNext.rejected, handleRejected),

  //   .addCase(addContact.pending, handlePending)
  //   .addCase(addContact.fulfilled, handleAddContactFulfield)
  //   .addCase(addContact.rejected, handleRejected)
  //   .addCase(deleteContact.pending, handlePending)
  //   .addCase(deleteContact.fulfilled, handleDeleteContactFulfield)
  //   .addCase(deleteContact.rejected, handleRejected),
});

export const carsReducer = carsSlice.reducer;
