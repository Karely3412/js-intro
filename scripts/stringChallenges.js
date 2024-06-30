// Challenge 1
// - - - - - - - - - - - - - - -

function inputType(userInput) {
  const userInputCheck = typeof userInput;

  if (userInputCheck === "string") {
    console.log(userInputCheck);
    return true;
  } else {
    console.log(userInputCheck);
    return false;
  }
}

console.log(inputType(1231));
console.log(inputType(false));
console.log(inputType(true));
console.log(inputType("String"));

// Challenge 2
// - - - - - - - - - - - - - - -

const blankStrCheck = (str) => {
  if (str === "" || str === " ") {
    console.log("This is a blank string");
    return true;
  } else {
    console.log("This is not blank a string");
    return false;
  }
};

console.log(blankStrCheck("kljsdlfj"));
console.log(blankStrCheck(" "));
console.log(blankStrCheck(""));

// Challenge 3
// - - - - - - - - - - - - - - -

function captializeFirst(str) {
  const myArray = [...str];

  const upperCased = myArray[0].toUpperCase();
  myArray.shift();
  myArray.unshift(upperCased);
  const myReturn = myArray.toString();

  console.log(myReturn);
  return myReturn;
}

captializeFirst("abcdef");

// Challenge 4
// - - - - - - - - - - - - - - -

function abbr(fullName) {
  const nameSplit = fullName.split(" ");

  const lastNameChar = nameSplit[1][0];
  const myReturn = `${nameSplit[0]} ${lastNameChar}.`;

  console.log(myReturn);
  return myReturn;
}

abbr("Karely Partida");

// Challenge 5
// - - - - - - - - - - - - - - -

const truncate = (str, int) => {
  if (str) {
    const myResults = str.slice(0, int);
    const truncatedStr = `${myResults}...`;

    console.log(truncatedStr);
    return truncatedStr;
  }
};

truncate("Isn't this lovely!", 14);
truncate("I am a long sentence", 6);

// Challenge 6
// - - - - - - - - - - - - - - -

const stringSlice = (str, char) => {
  const strSplit = str.split(char, str.length);
  console.log(strSplit);

  const myReturn = strSplit[1];
  console.log(myReturn);
  return myReturn;
};

// Note: I was having trouble with this one. Going to ask for help in class.

stringSlice("The practitioners grappled on the road side!", "g");
