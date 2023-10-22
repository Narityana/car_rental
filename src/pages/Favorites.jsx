import { useSelector } from 'react-redux';
import ListCars from 'components/ListCars';
import { selectorFavorites } from 'redux/favorites/favoritesSelectors';

const Favorites = () => {
  const { favoritesList } = useSelector(selectorFavorites);

  return (
    <>
      {/* <h1>This is your favorit cars</h1> */}
      {favoritesList.length > 0 ? (
        <ListCars carsData={favoritesList} />
      ) : (
        <p>Lets find the best car for you</p>
      )}
    </>
  );
};

export default Favorites;
