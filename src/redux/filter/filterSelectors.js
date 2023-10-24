import { createSelector } from '@reduxjs/toolkit';
import { selectCars } from '../cars/selectors';
export const selectFilter = state => state.filter;

export const selectMake = state => state.filter.make;
export const selectPrica = state => state.filter.price;
export const selectMinMileage = state => state.filter.minMileage;
export const selectMaxMileage = state => state.filter.MaxMileage;

export const selectFilteredCars = createSelector(
  [selectCars, selectFilter],
  (cars, filter) => {
    const FilteredCars = cars.filter(
      car =>
        (filter.make === '' || car.make === filter.make) &&
        (filter.price === '' || car.price <= filter.price) &&
        (filter.minMileage === '' || car.mileage >= filter.minMileage) &&
        (filter.maxMileage === '' || car.mileage <= filter.maxMileage)
    );

    return FilteredCars;
  }
);
