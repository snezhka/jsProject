export function generateInteger(min, max) {

  return Math.floor(Math.random() * max) + min;
}
export function generateFloat(min, max, decimal = 2) {
  return (Math.random() * (max - min) + min).toFixed(decimal);
}
export function generateArray(array) {
  const min = 1;
  const max = array.length
  const newArray = [...Array(generateInteger(min, max))].map(
    () => array[generateInteger(min, max - 1)]
  );
  return Array.from(new Set(newArray));
}
