// import Reactfrom 'react';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import Select from 'react-select';
// import { fetchFiltredCarByMake } from '../../redux/filter/filterOperations';
import { setFilter } from 'redux/filter/filterSlice';
import { createDropdownMake } from 'helpers/createDropdownMake';
import { createPrice } from 'helpers/createPrice';
import {
  Container,
  Form,
  LabelWrap,
  InputsWrap,
  Input,
} from './FiltersForm.styled';
import make from 'data/makes.json';
// import Button from 'components/Button';

const FiltersForm = ({ setFiltering }) => {
  const [loading, setLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  //   const [error, setError] = useState(false);
  const [carMakes, setCarMakes] = useState({
    value: '',
    label: 'Enter the text',
  });

  const [price, setPrice] = useState({
    value: '',
    label: 'To $',
  });

  const [minMileage, setMinMileage] = useState({
    value: '',
  });
  const [maxMileage, setMaxMileage] = useState({
    value: '',
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (
      carMakes.value === '' &&
      price.value === '' &&
      maxMileage.value === '' &&
      minMileage.value === ''
    ) {
      console.log('button is disabled');
      setIsButtonDisabled(true);
    }
  }, [carMakes, price, maxMileage, minMileage]);

  const handleMakeChange = option => {
    console.log(option);
    setIsButtonDisabled(false);
    setCarMakes(option);
  };

  const handlePriceChange = option => {
    setIsButtonDisabled(false);
    setPrice(option);
  };

  const handleMinChange = option => {
    setIsButtonDisabled(false);
    setMinMileage(option);
  };
  const handleMaxChange = option => {
    setIsButtonDisabled(false);
    setMaxMileage(option);
  };

  const handleFormSubmit = async event => {
    event.preventDefault();
    setLoading(true);
    console.log('натиснули кнопку');
    const formData = {
      make: carMakes.value,
      price: price.value,
      minMileage: minMileage.value,
      maxMileage: maxMileage.value,
    };
    dispatch(setFilter(formData));
    setFiltering(true);

    console.log(formData);
  };

  const handleFormReset = () => {
    setCarMakes({ value: '', label: 'Enter the text' });
    setPrice({ value: '', label: 'To $' });
    setMinMileage({ value: '' });
    setMaxMileage({ value: '' });
  };

  return (
    <Container>
      <Form onSubmit={handleFormSubmit}>
        <LabelWrap>
          <label>Car brand</label>
          <Select
            name="make"
            options={createDropdownMake(make)}
            value={carMakes}
            onChange={handleMakeChange}
            styles={{
              control: baseStyles => ({
                ...baseStyles,
                backgroundColor: 'var(--secondwhite)',
                width: '224px',
                height: '48px',
                borderRadius: '14px',
                fontSize: '18px',
                fontWeight: '500',
                paddingLeft: '18px',
                marginTop: '8px',
              }),
            }}
          />
        </LabelWrap>
        <LabelWrap>
          <label>Price/ 1 hour</label>
          <Select
            name="price"
            options={createPrice()}
            value={price}
            onChange={handlePriceChange}
            styles={{
              control: baseStyles => ({
                ...baseStyles,
                backgroundColor: 'var(--secondwhite)',
                width: '125px',
                height: '48px',
                borderRadius: '14px',
                fontSize: '18px',
                fontWeight: '500',
                paddingLeft: '18px',
                marginTop: '8px',
              }),
            }}
          />
        </LabelWrap>
        <LabelWrap>
          <label>Сar mileage / km</label>
          <InputsWrap>
            <Input
              id="from"
              name="minMileage"
              //   type="number"
              value={minMileage.value}
              onChange={handleMinChange}
            ></Input>
            <Input
              id="to"
              name="maxMileage"
              value={maxMileage.value}
              onChange={handleMaxChange}
            ></Input>
          </InputsWrap>
        </LabelWrap>
        <button
          width="274px"
          type="submit"
          className={isButtonDisabled ? 'disabled' : ''}
          disabled={loading || isButtonDisabled}
        >
          Search
        </button>
        <button
          type="reset"
          onClick={handleFormReset}
          disabled={loading || isButtonDisabled}
        ></button>
      </Form>
    </Container>
  );
};

export default FiltersForm;
