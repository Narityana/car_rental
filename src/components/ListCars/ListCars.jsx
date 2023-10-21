import CatalogCard from 'components/CatalogCard';
// import Modal from 'components/Modal';
// import ModalCard from 'components/ModalCard';
import { Container, List } from './ListCars.styled';

const ListCars = ({ carsData }) => {
  // const onLearnMoreClick = () => {};

  return (
    <Container>
      <List>
        {carsData.map(item => (
          <CatalogCard
            key={item.id}
            car={item}
            // onLearnMoreClick={onLearnMoreClick}
          />
        ))}
      </List>
      {/* <Modal>
<ModalCard></ModalCard>
      </Modal> */}
    </Container>
  );
};

export default ListCars;
