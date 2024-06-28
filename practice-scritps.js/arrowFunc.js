const greetUser = () => "Welcome to the course!";
console.log(greetUser());

const doubleNumber = (num) => num * 2;
console.log(doubleNumber(2));

const cubeRoot = (x) => {
  return x ^ 3;
};
console.log(cubeRoot(5));

const generateRandomNumber = () => {
  const myCalc = Math.floor(Math.random() * 11);
  return myCalc;
};
console.log(generateRandomNumber());

const calculateArea = (length, width) => {
  return length * width;
};
console.log(calculateArea(10, 5));
