//  - - - - - - - - - - - - - - - -
// Challenge 1

const myObject = {
  id: 1,
  name: "Karely",
  age: 0,
  DOB: "01/08/0000",
  gradesCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
};

myObject["Delete"] = "Anything I want(:";

console.log(
  `${myObject.name} has been through grade ${myObject["gradesCompleted"][11]}. She is ${myObject["age"]} & her birthday is on ${myObject.DOB}.  `
);
console.log(myObject);
delete myObject["Delete"];
console.log(myObject);

//  - - - - - - - - - - - - - - - -
// Challenge 2

const myObject = {
  firstName: "Karely",
  lastName: "Partida",
  city: "Springville",
  semesters: {
    semesterOne: "incomplete",
    semesterTwo: "incomplete",
    semesterThree: "incomplete",
    semesterFour: "incomplete",
  },
};

const semOne = (myObject["semesters"].semesterOne = "complete");

console.log(myObject["semesters"].semesterOne);
console.log(myObject);

delete myObject["semesters"].semesterFour;
// delete myObject["semesters"]["semesterFour"];
console.log(myObject);

myObject["favoriteLanguage"] = "scss + python = <3";
console.log(myObject);

//  - - - - - - - - - - - - - - - -
// Challenge 3

const arrayOne = [1, 2, 3, 4, 5];

const myFunction = (arrayOne) => {
  const arrayTwo = [];

  arrayOne.forEach((element) => {
    const poppedValue = arrayOne.pop();

    if (poppedValue === 1) {
      arrayTwo.push(poppedValue);
    }
    console.log(arrayTwo);
  });
};

myFunction(arrayOne);
