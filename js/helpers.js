function generateIntegerFrom(...args) {
  return Math.floor(Math.random() * args[1]) + args[0];
}

function generateFloatFrom(...args) {
  return (Math.random() * (args[1] - args[0]) + args[0]).toFixed(args[2]);
}

function generateArrayFrom(array) {
  let newArray = [...Array(generateIntegerFrom(1, array.length))].map(
    (el) => array[generateIntegerFrom(1, array.length - 1)]
  );
  return Array.from(new Set(newArray));
}

export const generateInteger = generateIntegerFrom;
export const generateFloat = generateFloatFrom;
export const generateArray = generateArrayFrom;
