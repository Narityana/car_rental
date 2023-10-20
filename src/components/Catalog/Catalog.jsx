import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCars } from 'redux/cars/operations';
import {
  selectCars,
  selectError,
  selectIsLoading,
  selectorPage,
} from 'redux/cars/selectors';
// import { setPage } from 'redux/pageSlice';

import Loader from 'components/Loader';
import ListCars from 'components/ListCars';

const CatalogCars = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const carsList = useSelector(selectCars);
  const page = useSelector(selectorPage);
  const per_page = 8;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars({ page, per_page }));
  }, [dispatch, page]);
  console.log(carsList);

  const handleLoadMore = () => {
    dispatch(fetchCars({ page: page + 1, per_page }));
  };

  return (
    <>
      <h1>Our best cars</h1>
      {isLoading && !error && <Loader />}
      {error && <b>Oops! Something went wrong. Please try again later.</b>}
      <ListCars carsData={carsList} />

      <button onClick={handleLoadMore}>Load More</button>
    </>
  );
};
export default CatalogCars;
