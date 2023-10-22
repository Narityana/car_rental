import { useEffect, useState } from 'react';

import defaultPhoto from '../../images/imageBig.png';
import Icon from '../../images/icons.svg';
import Button from 'components/Button';
import { fetchPhoto } from 'helpers/PhotoHelper';
import { splitAddress } from '../../helpers/AdressHelper';

import { formatMileage } from '../../helpers/MileageHelper';
import { NavLink } from 'react-router-dom';
import {
  ModalWrap,
  ButtonX,
  Description,
  Title,
  Item,
  RentalList,
  RentalItem,
} from './ModalCard.styled';

import {
  Photo,
  DetailsContainer,
  MainDetails,
  Model,
  CardTitle,
  Details,
} from '../CatalogCard/CatalogCard.styled';

const ModalCard = ({ car, onClose }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    address,
    description,
    rentalConditions,
    mileage,
  } = car;

  const { country } = splitAddress(address);

  const mileageQuery = formatMileage(mileage);

  const condition = rentalConditions.split('\n');

  const age = condition[0].split(' ');
  const ageQuery = age[2];

  const ageText = age.splice(0, 2).join(' ');

  const [photo, setPhoto] = useState();
  useEffect(() => {
    fetchPhoto(img, setPhoto, defaultPhoto);
  }, [img]);
  return (
    <ModalWrap>
      <ButtonX type="button" aria-label="close button" onClick={onClose}>
        <svg width="24" height="24" stroke="black">
          <use href={`${Icon}#icon-x`} />
        </svg>
      </ButtonX>
      <Photo src={photo} alt={`${make} ${model} ${year}`} />
      <DetailsContainer>
        <MainDetails>
          <CardTitle>
            <p>{`${make}`}</p>
            <Model> {`${model}`}</Model>
            <p>, {`${year}`}</p>
          </CardTitle>

          {/* <CardTitle>{rentalPrice}</CardTitle> */}
        </MainDetails>
        <Details>
          <Item>{country}</Item>
          <Item>id: {id}</Item>
          <Item>Year: {year}</Item>
          <Item>Type: {type}</Item>
        </Details>
        <Details>
          <Item>Fuel consumption: {fuelConsumption}</Item>
          <Item>Engine Size: {engineSize}</Item>
        </Details>

        <Description>{description}</Description>
        <Title>Accessories and functionalities:</Title>
        <Details>
          {accessories.map((item, index) => (
            <Item key={index}>{item}</Item>
          ))}
        </Details>
        <Details>
          {functionalities.map((item, index) => (
            <Item key={index}>{item}</Item>
          ))}
        </Details>
        <Title>Rental Conditions:</Title>
        <RentalList>
          <RentalItem>
            {ageText} <span>{ageQuery}</span>
          </RentalItem>
          <RentalItem>{condition[1]}</RentalItem>
          <RentalItem>{condition[2]}</RentalItem>
          <RentalItem>
            Mileage: <span>{mileageQuery}</span>
          </RentalItem>
          <RentalItem>
            Price: <span>{rentalPrice}</span>
          </RentalItem>
        </RentalList>
      </DetailsContainer>
      <NavLink to="tel:+380730000000">
        <Button buttonName="Rent Car" width="168px" />
      </NavLink>
    </ModalWrap>
  );
};

export default ModalCard;
