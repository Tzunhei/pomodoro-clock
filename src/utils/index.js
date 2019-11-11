export const formatNumber = number => {
  return number < 10 ? `0${number}` : number;
};

export const generateRandomIndex = array => {
  return Math.floor(Math.random() * array.length) + 1;
};
