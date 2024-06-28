// Exercise 1 -> Regular Function
// --------------
// function calculateArea(leng, width) {
//   const areaOfSquare = leng * width;
//   console.log(areaOfSquare);
//   return areaOfSquare;
// }

// calculateArea(8, 5);

// Exercise 2 -> Function Expression
// --------------
// function greetUser(name = "User") {
//   const returnGreeting = `Welcome ${name}!`;
//   console.log(returnGreeting);
//   return returnGreeting;
// }

// greetUser("Karely");
// greetUser();

//  - - - - - - - - - - - - -
// Exercise 3 -> Function Expression
// --------------

// const exponent = (base, expo) => {
//   return base ** expo;
// };

// console.log(exponent(2, 28));

//  - - - - - - - - - - - - -
// Exercise 3 -> Anonymous Function Expression
// --------------

// const square = function (valToSquare) {
//   return valToSquare ** 2;
// };

// console.log(square(2));

//  - - - - - - - - - - - - - - -

const fruitsArray = ["apple", "banana", "orange", "grape", "kiwi"];

const myReturn = fruitsArray.forEach((fruit, idx) => {
  const returnValIdx = `Index: ${idx} Value: ${fruit}`;
  console.log(returnValIdx);
  return returnValIdx;
});

console.log(myReturn);

//  - - - - - - - - - - - - - - -

const originalNumbers = [3, 8, 12, 5, 7];

function doubleDigets(array) {
  array.map((val) => {
    const doublingUp = val * 2;
    console.log(doublingUp);
  });
}

doubleDigets(originalNumbers);

//  - - - - - - - - - - - - - - -

const mixedData = [
  42,
  "hello",
  ["world", 2023],
  () => "function",
  true,
  null,
  { key: "value" },
];
