// Challenge 1
// - - - - - - - - - -

function theLongestWord(myArray) {
  newArray = "";
  myArray.forEach((element) => {
    if (element.length > element) console.log(element);
  });

  // myArray.join(" ");
  // console.log(myArray);

  // return test;
}

theLongestWord(["any", "word", "i", "can", "think", "of"]);

// Challenge 2
// - - - - - - - - - -
//  add in guard clauses
const characterSwap = (word) => {
  const firstChar = word[0];
  const lastChar = word.charAt(word.length - 1);
  const wordSlice = word.slice(1, -1);

  return lastChar + wordSlice + firstChar;
};

console.log(characterSwap("Karely"));

// Challenge 3
// - - - - - - - - - -

function sumOfValues(inputArray) {
  let newVal = 0;

  inputArray.forEach((val) => {
    newVal += val;
    console.log(newVal);
  });
}

sumOfValues([1, 2, 3]);

// // Challenge 4
// // - - - - - - - - - -

function combinatedArray(firArray, secArray) {
  let newArray = [];
  for (let i = 0; i < firArray.length; i++) {
    newArray.push(firArray[i]);
    newArray.push(secArray[i]);
  }
  console.log(newArray);
}

combinatedArray([1, 2, 3], [4, 5, 6]);

// // Challenge 5
// // - - - - - - - - - -

// EX: "I am a sentence" => "I Am A Sentence"

const firstLetCap = (sentence) => {
  const newArray = [];

  sentence.split(" ").forEach((val, idx) => {
    console.log(val, idx);
    newArray.push(val[0].toUpperCase() + val.slice(1));
  });
  return newArray.join(" ");
};

console.log(firstLetCap("I am a sentence"));
