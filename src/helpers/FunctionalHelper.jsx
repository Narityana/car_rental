export function findShortestFunctionality(functionalities) {
  return functionalities.reduce((shortest, current) => {
    return current.length < shortest.length ? current : shortest;
  }, functionalities[0]);
}
