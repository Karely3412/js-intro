// Challenge 1
// - - - - - - - - - - - - - - -

function byTwoCount(anArray) {
  const returnArray = [];
  anArray.forEach((val, idx) => {
    if (val % 2 === 0) {
      console.log(val);
    }
  });
  return returnArray;
}

console.log(byTwoCount([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Challenge 2
// - - - - - - - - - - - - - - -

// removeByIndex[‘a', 'b', 'c', 'd', 'f', 'f', 'e', 'f'], [1, 5]) => ['b', 'f']]

const removeByIndex = (myArray, [idx1, idx2]) => {
  const newArray = [];
  myArray.forEach((val, idx) => {
    if (idx === idx1 || idx === idx2) {
      console.log(newArray.push(val));
    }
  });
  return newArray;
};

console.log(removeByIndex(["a", "b", "c", "d", "f", "f", "e", "f"], [1, 5]));

// Challenge 3
// - - - - - - - - - - - - - - -
// numToArray(12345) => [1, 2, 3, 4, 5]

const numToArray = (num) => {
  const numToStr = num.toString();
  const test = Array.from(numToStr, Number);
  return test;
};

console.log(numToArray(12345));
