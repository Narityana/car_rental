export const createDropdownMake = arr => {
  const options = arr.map(option => ({
    value: option,
    label: option,
  }));
  return options;
};
