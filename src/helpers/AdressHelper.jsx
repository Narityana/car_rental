export function splitAddress(address) {
  const parts = address.split(', ');
  const city = parts[1];
  const country = parts[2];
  return { city, country };
}
