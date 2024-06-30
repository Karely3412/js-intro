// Challenge 1
// - - - - - - - - - -
// I don't under stand this problem.

// function theLongestWord(myArray) {
//   newArray = "";
//   myArray.forEach((element) => {
//     const test = element.split(",");
//     const test2 = test.join(" ");
//     myArray.push(test2);
//   });

//   // myArray.join(" ");
//   // console.log(myArray);

//   // return test;
// }

// theLongestWord(["any", "word", "i", "can", "think", "of"]);

// Challenge 2
// - - - - - - - - - -

// const characterSwap = (word) => {
//   const placeHolderVar = [];

//   if (word[0]) {
//     console.log(word[0]);
//   }

//   if (word.length) {
//     console.log(word.length - 1);

//     // for (let i = 0; i < word.length; i++) {
//     //   console.log(word[i]);
//     // }
//   }
// };

// characterSwap("Karely");

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

// Challenge 3
// - - - - - - - - - -

function combinatedArray(firArray, secArray) {
  let newArray = [];

  firArray.forEach((val) => {
    newArray.push(val);

    secArray.forEach((val, idx) => {
      if (val === secArray[0]) {
        newArray.push(val);
      }
      return;
    });
  });
  console.log(newArray);
}

combinatedArray([1, 2, 3], [4, 5, 6]);
