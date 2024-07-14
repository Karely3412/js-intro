// Challenge 1
// - - - - - - - - - -

function theLongestWord(myArray) {
  newArray = "";

  // for (let i = 0; i < myArray.length; i++) {
  //   const test = myArray[i];
  //   for (let j = 0; j < test.length; j++) {
  //     console.log(j);
  //   }
  // }
  // myArray.forEach((val) => {
  //   // console.log(val);
  //   if (val.length < 3) {
  //     console.log(val);
  //   }
  // });

  // myArray.join(" ");
  // console.log(myArray);

  return newArray;
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

// // Challenge 6
// // - - - - - - - - - -

// // Challenge 7
// - - - - - - - - - -
// EX: "Hi there" => "eehhirt"

// function orderedWord(word) {
//   const splitWord = word.split("");
//   const sortWord = splitWord.sort();
//   sortWord.shift();
//   const test = sortWord[0].toLowerCase();
//   console.log(test);
//   // console.log(sortWord[0]);
//   sortWord.replace(sortWord[0], test);

//   // const sortedWord = splitWord.sort();

//   return sortWord;
// }

// console.log(orderedWord("Hi there"));

// Challenge 8
// - - - - - - - - - -

function removeByIndex(myArray, [idx1, idx2]) {
  const newArray = [];
  myArray.forEach((val, idx) => {
    if (idx === idx1 || idx === idx2) {
      console.log(newArray.push(val));
    }
  });
  return newArray;
}
console.log(removeByIndex(["a", "b", "c", "d"], [1, 3]));

// Challenge 9
// - - - - - - - - - -

const myObject = {
  userName: "",
  activeStatus: "",
};

// function(myObject){

// }

myObject.userName = "Karely";
myObject.activeStatus = "active";
console.log(myObject.userName);
console.log(myObject.activeStatus);
console.log(`${myObject.userName} is ${myObject.activeStatus}!`);

// Challenge 10
// - - - - - - - - - -

function powOf(num1, num2) {
  return num1 ** num2;
}

console.log(powOf(4, 2));
