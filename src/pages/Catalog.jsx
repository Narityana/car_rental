import { fetchCars } from 'components/Service/Api';
import { useEffect, useState } from 'react';
import Loader from 'components/Loader';
import ListCars from 'components/ListCars';
const Cars = () => {
  const [carsList, setCarsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const addMovies = async () => {
      try {
        setIsLoading(true);
        const carsData = await fetchCars();

        console.log(carsData);

        setCarsList(carsData);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    addMovies();
  }, []);

  return (
    <>
      <h1>Our best cars</h1>
      <ListCars carsData={carsList} />
      {isLoading && <Loader />}
    </>
  );
};

export default Cars;
