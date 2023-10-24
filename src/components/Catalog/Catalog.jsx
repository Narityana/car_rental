import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchCarsFirst, fetchCarsNext } from 'redux/cars/operations';
import { selectCars, selectError, selectIsLoading } from 'redux/cars/selectors';
import { selectFilteredCars } from 'redux/filter/filterSelectors';

import Loader from 'components/Loader';
import ListCars from 'components/ListCars';
import FiltersForm from 'components/FiltersForm';
import { Section, Button } from './Catalog.styled';

const CatalogCars = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const carsList = useSelector(selectCars);
  const filteredCars = useSelector(selectFilteredCars);
  const [filtering, setFiltering] = useState(false);
  const [page, setPage] = useState(1);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setShowLoadMore(true);
    dispatch(fetchCarsFirst());
  }, [dispatch]);

  const shovingCarsList = () => {
    if (!filtering) {
      console.log(carsList);
      return carsList;
    }
    if (filtering) {
      console.log(filteredCars);
      return filteredCars;
    }
  };
  const handleLoadMore = async () => {
    setPage(prevState => prevState + 1);

    const response = await dispatch(fetchCarsNext({ page: page + 1 }));
    console.log(response.payload.length);
    if (response.payload.length < 8) {
      setShowLoadMore(false);
    }
  };

  return (
    <Section>
      {isLoading && !error && <Loader />}
      {error && <b>Oops! Something went wrong. Please try again later.</b>}
      <FiltersForm setFiltering={setFiltering} />
      <ListCars carsData={shovingCarsList()} />

      {showLoadMore && <Button onClick={handleLoadMore}>Load More</Button>}
    </Section>
  );
};
export default CatalogCars;
