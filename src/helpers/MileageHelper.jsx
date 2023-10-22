export function formatMileage(mileage) {
  return (mileage / 1000)
    .toLocaleString(undefined, {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    })
    .replace(/\./g, ',');
}
