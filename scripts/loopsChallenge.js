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
  const returnArray = [];
  const numToStr = num.toString();
  for (let i = 0; i < numToStr.length; i++) {
    returnArray.push(parseInt(numToStr));

    return returnArray;
  }
};

console.log(numToArray(12345));

// Challenge 4
// - - - - - - - - - - - - - - -

arrayOne = [1, 2, 3];
arrayTwo = ["a", "b", "c", "d"];

// [1, 'a'], ['a', 1], [1, 'b'],
// ['b', 1], [1, 'c'], ['c', 1],
// [1, 'd'], ['d', 1], [2, 'a'],
// ['a', 2], [2, 'b'], ['b', 2],
// [2, 'c'], ['c', 2], [2, 'd'],
// ['d', 2], [3, 'a'], ['a', 3],
// [3, 'b'], ['b', 3], [3, 'c'],
// ['c', 3], [3, 'd'], ['d', 3]

const returnArray = [];

for (let i = 0; i < arrayOne.length; i++) {
  for (let j = 0; j < arrayTwo.length; j++) {
    returnArray.push([arrayOne[i], arrayTwo[j]]);
    returnArray.push([arrayTwo[j], arrayOne[i]]);
  }
}

console.log(returnArray);
