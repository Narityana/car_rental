import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchCars } from 'redux/cars/operations';
import { selectCars, selectError, selectIsLoading } from 'redux/cars/selectors';

import Loader from 'components/Loader';
import ListCars from 'components/ListCars';
import { Section, Button } from './Catalog.styled';
const CatalogCars = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const carsList = useSelector(selectCars);
  const [page, setPage] = useState(1);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars({ page }));
  }, [dispatch, page]);

  const handleLoadMore = async () => {
    setPage(prevState => prevState + 1);

    const response = await dispatch(fetchCars({ page }));

    if (response.payload.data.length < 8) {
      setShowLoadMore(false);
    }
  };

  return (
    <Section>
      <h1>Our best cars</h1>
      {isLoading && !error && <Loader />}
      {error && <b>Oops! Something went wrong. Please try again later.</b>}
      <ListCars carsData={carsList} />

      {showLoadMore && <Button onClick={handleLoadMore}>Load More</Button>}
    </Section>
  );
};
export default CatalogCars;
