import CatalogCard from 'components/CatalogCard';

import { Container, List } from './ListCars.styled';

const ListCars = ({ carsData }) => {
  return (
    <Container>
      <List>
        {carsData.map(item => (
          <CatalogCard key={item.id} details={item} />
        ))}
      </List>
    </Container>
  );
};

export default ListCars;
