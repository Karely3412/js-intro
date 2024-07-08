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
