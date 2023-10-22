import { useSelector } from 'react-redux';
import ListCars from 'components/ListCars';
import EmptyFavorite from 'components/EmptyFavorite';
import { selectorFavorites } from 'redux/favorites/favoritesSelectors';

const Favorites = () => {
  const { favoritesList } = useSelector(selectorFavorites);

  return (
    <>
      {favoritesList.length > 0 ? (
        <ListCars carsData={favoritesList} />
      ) : (
        <EmptyFavorite></EmptyFavorite>
      )}
    </>
  );
};

export default Favorites;
