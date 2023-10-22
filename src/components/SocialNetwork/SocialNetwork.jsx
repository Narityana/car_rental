import { ListNetworks, Item, Link } from './SocialNetwork.styled';
import Icon from '../../images/icons.svg';
const SocialNetwork = () => {
  return (
    <ListNetworks>
      <Item>
        <Link to="https://www.facebook.com/" target="_blank">
          <svg width="24px" height="24px">
            <use href={`${Icon}#icon-facebook`} />
          </svg>
        </Link>
      </Item>
      <Item>
        <Link to="https://www.instagram.com/" target="_blank">
          <svg width="24px" height="24px">
            <use href={`${Icon}#icon-instagram`} />
          </svg>
        </Link>
      </Item>
      <Item>
        <Link to="https://www.linkedin.com/" target="_blank">
          <svg width="24px" height="24px">
            <use href={`${Icon}#icon-linkedin`} />
          </svg>
        </Link>
      </Item>
      <Item>
        <Link to="https://twitter.com/" target="_blank">
          <svg width="24px" height="24px">
            <use href={`${Icon}#icon-twitter`} />
          </svg>
        </Link>
      </Item>
    </ListNetworks>
  );
};

export default SocialNetwork;
