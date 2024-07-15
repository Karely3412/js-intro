const arrayOne = [1, 2, 3, 4, 5];
const arrayTwo = [6, 7, 8, 9, 10];

class ArrayItems {
  constructor(myArray) {
    this.myArray = myArray;
  }

  myMethod() {
    while (this.myArray.length > 0) {
      this.myArray.shift();
      console.log(this.myArray);

      this.myArray.pop();
      console.log(this.myArray);
    }
  }
}

newArray = new ArrayItems(arrayOne);
newArray.myMethod();

newArrayTwo = new ArrayItems(arrayTwo);
newArrayTwo.myMethod();

// const newObject = { arrayOne: [...arrayOne] };
// const newObject2 = { arrayTwo: [...arrayTwo] };

// function myOtherMethod(myObject) {
//   console.log(myObject[""]);

//   while (myObject[0].length > 0) {
//     myObject[0].shift();
//     console.log(myObject[0]);

//     myObject[0].pop();
//     console.log(myObject[0]);
//   }
// }

// console.log(myOtherMethod(newObject));
// console.log(myOtherMethod(newObject2));
