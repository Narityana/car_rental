import { splitAddress } from '../helpers/AdressHelper';
import { findShortestFunctionality } from '../helpers/FunctionalHelper';
import defaultPhoto from '../images/image.png';
import Icon from '../images/icons.svg';
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

const CatalogCard = ({ details, onLearnMoreClick }) => {
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
  } = details;

  const photo = img ? `${img}` : `${defaultPhoto}`;

  const { city, country } = splitAddress(address);
  const oneFunctionality = findShortestFunctionality(functionalities);

  return (
    <Container>
      <PhotoContainer>
        <Photo src={photo} alt={`${make} ${model} ${year}`} />
        <GradientOverlay />
        <LikeButton type="button">
          <IconHeart>
            <use href={`${Icon}#icon-heart`} />
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
        onClick={onLearnMoreClick}
      />
    </Container>
  );
};

export default CatalogCard;
