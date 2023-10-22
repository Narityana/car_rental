import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  addToFavorites,
  removeFromFavorites,
} from 'redux/favorites/favoritesSlice';
import { selectorFavorites } from 'redux/favorites/favoritesSelectors';

import { fetchPhoto } from 'helpers/PhotoHelper';
import { splitAddress } from '../../helpers/AdressHelper';
import { findShortestFunctionality } from '../../helpers/FunctionalHelper';
import Modal from '../Modal/Modal';
import ModalCard from 'components/ModalCard';
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
  Vector,
  P,
} from './CatalogCard.styled';

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

  const { city, country } = splitAddress(address);
  const oneFunctionality = findShortestFunctionality(functionalities);

  const dispatch = useDispatch();
  const { favoritesList } = useSelector(selectorFavorites);

  const [isFavorite, setIsFavorite] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [photo, setPhoto] = useState();

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };
  useEffect(() => {
    if (favoritesList.some(item => item.id === car.id)) {
      setIsFavorite(true);
    }
  }, [favoritesList, car]);

  const toggleFavorite = () => {
    setIsFavorite(prevState => !prevState);

    if (favoritesList.some(item => item.id === car.id)) {
      dispatch(removeFromFavorites(car));
    } else {
      dispatch(addToFavorites(car));
    }
  };

  useEffect(() => {
    const body = document.body;
    if (isModalOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
    }

    return () => {
      body.style.overflow = '';
    };
  }, [isModalOpen]);

  useEffect(() => {
    fetchPhoto(img, setPhoto, defaultPhoto);
  }, [img]);

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
          <P>
            {city} <Vector> | </Vector> {country} <Vector> | </Vector>
            {rentalCompany}
          </P>
          <P>
            {type} <Vector> | </Vector> {id}
            <Vector> | </Vector>
            {oneFunctionality}
          </P>
        </Details>
      </DetailsContainer>
      <Button buttonName="Learn more" width="274px" onClick={toggleModal} />
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <ModalCard car={car} onClose={toggleModal} />
        </Modal>
      )}
    </Container>
  );
};

export default CatalogCard;
