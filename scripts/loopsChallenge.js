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

const removeByIndex = (myArray, idx) => {
  const newArray = [];
  myArray.forEach((val, idx) => {
    if (val == idx[0]) {
      newArray.push(val);
    } else if (val == idx[1]) {
      newArray.push(val);
    }
  });
  return newArray;
};

console.log(removeByIndex(["a", "b", "c", "d", "f", "f", "e", "f"], [1, 5]));
