import { Wrapper } from './EmptyFavorite.styled';
import Image from '../../images/imageBig.png';
const EmptyFavorite = () => {
  return (
    <Wrapper>
      <h1>Lets find best car for you</h1>
      <img src={Image} alt="no favorites cars"></img>
    </Wrapper>
  );
};

export default EmptyFavorite;
