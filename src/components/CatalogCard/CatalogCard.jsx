import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  addToFavorites,
  removeFromFavorites,
} from 'redux/cars/favorites/favoritesSlice';
import { selectorFavorites } from 'redux/cars/favorites/favoritesSelectors';
import { splitAddress } from '../helpers/AdressHelper';
import { findShortestFunctionality } from '../helpers/FunctionalHelper';
import defaultPhoto from '../../images/image.png';
import Icon from '../../images/icons.svg';
import Button from 'components/Button';
import {
  Container,
  Photo,
  PhotoContainer,
  LikeButton,
  IconHeart,
  GradientOverlay,
  DetailsContainer,
  MainDetails,
  Model,
  CardTitle,
  Details,
  Tooltip,
  ModelTooltip,
} from './CatalogCard.styled';
// import { useEffect } from 'react';

const CatalogCard = ({ car }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    // fuelConsumption,
    // engineSize,
    // accessories,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
    // rentalConditions,
    // mileage,
  } = car;
  const photo = img ? `${img}` : `${defaultPhoto}`;

  const { city, country } = splitAddress(address);
  const oneFunctionality = findShortestFunctionality(functionalities);

  const dispatch = useDispatch();
  const { favoritesList } = useSelector(selectorFavorites);

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (favoritesList.some(item => item.id === car.id)) {
      setIsFavorite(true);
    }
  }, [favoritesList, car]);

  const toggleFavorite = () => {
    setIsFavorite(prevState => !prevState);

    if (favoritesList.some(item => item.id === car.id)) {
      dispatch(removeFromFavorites(car.id));
    } else {
      dispatch(addToFavorites(car));
    }
  };

  return (
    <Container>
      <PhotoContainer>
        <Photo src={photo} alt={`${make} ${model} ${year}`} />
        <GradientOverlay />

        <LikeButton onClick={toggleFavorite}>
          <IconHeart>
            <use
              href={
                !isFavorite ? `${Icon}#icon-heart` : `${Icon}#icon-heart-active`
              }
            />
          </IconHeart>
        </LikeButton>
      </PhotoContainer>
      <DetailsContainer>
        <MainDetails>
          <Tooltip>
            <CardTitle>
              <ModelTooltip>{`${model}`}</ModelTooltip>
              <p>{`${make}`}</p>
              <Model> {`${model}`}</Model>
              <p>, {`${year}`}</p>
            </CardTitle>
          </Tooltip>

          <CardTitle>{rentalPrice}</CardTitle>
        </MainDetails>
        <Details>
          <p>{city}</p>
          <p>{country}</p>
          <p>{rentalCompany}</p>
          <p>{type}</p>
          <p>{id}</p>
          <p>{oneFunctionality}</p>
        </Details>
      </DetailsContainer>
      <Button
        buttonName="Learn more"
        width="274px"
        // onClick={onLearnMoreClick}
      />
    </Container>
  );
};

export default CatalogCard;
