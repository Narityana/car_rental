export const createPrice = () => {
  const optionsPrise = [];

  for (let i = 30; i <= 500; i += 10) {
    optionsPrise.push({
      value: i,
      label: i,
    });
  }
  return optionsPrise;
};
