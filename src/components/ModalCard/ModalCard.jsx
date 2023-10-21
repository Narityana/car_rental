import { useEffect, useState } from 'react';

import defaultPhoto from '../../images/imageBig.png';
import Icon from '../../images/icons.svg';
import Button from 'components/Button';
import { fetchPhoto } from 'helpers/PhotoHelper';
import { splitAddress } from '../../helpers/AdressHelper';
import { findShortestFunctionality } from '../../helpers/FunctionalHelper';

import {
  // Container,
  Photo,
  // PhotoContainer,
  // LikeButton,
  // IconHeart,
  // GradientOverlay,
  DetailsContainer,
  MainDetails,
  Model,
  CardTitle,
  Details,
  Tooltip,
  ModelTooltip,
} from '../CatalogCard/CatalogCard.styled';

const ModalCard = ({ car, onClose }) => {
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
  const [photo, setPhoto] = useState();
  useEffect(() => {
    fetchPhoto(img, setPhoto, defaultPhoto);
  }, [img]);
  return (
    <div>
      <button type="button" aria-label="close button" onClick={onClose}>
        <svg width="24" height="24">
          <use href={`${Icon}#icon-x`} />
        </svg>
      </button>
      <Photo src={photo} alt={`${make} ${model} ${year}`} />
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
      <Button buttonName="Rent Car" width="168px" />
    </div>
  );
};

export default ModalCard;
