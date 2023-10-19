import { fetchCars } from 'components/Service/Api';
import { useEffect, useState } from 'react';
import Loader from 'components/Loader';
import ListCars from 'components/ListCars';

const Cars = () => {
  const [carsList, setCarsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const per_page = 8;

  useEffect(() => {
    const addCars = async () => {
      try {
        setIsLoading(true);
        const carsData = await fetchCars(page, per_page);

        return page === 1
          ? setCarsList(carsData)
          : setCarsList(prevState => [...prevState, ...carsData]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    addCars();
  }, [page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <h1>Our best cars</h1>
      <ListCars carsData={carsList} />
      {isLoading && <Loader />}

      <button onClick={handleLoadMore}>Load More</button>
    </>
  );
};

export default Cars;
