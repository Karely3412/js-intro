// Challenge 1
// - - - - - - - - - -

class User {
  id = 0;
  name = "";
  email = "";
  password = "";

  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

userOne = new User(2, "Johnny Bravo", "test@tester.com", "4321");
userTwo = new User(3, "Mickey Mouse", "test@testing.com", "2134");

console.log(`Hello, ${userOne.name} your email is ${userOne.email}`);
console.log(`Hello, ${userTwo.name} your email is ${userTwo.email}`);
console.log(userOne);
console.log(userTwo);

// Challenge 2
// - - - - - - - - - -
// This was the closest I was able to get it
function xmlHttpRequ(reqType, url) {
  return new Promise((resolve, reject) => {
    const objectRequested = new XMLHttpRequest();
    objectRequested.open(reqType, url);
    objectRequested.responseType = "json";
    objectRequested.send();

    objectRequested.onload = function () {
      // console.log(objectRequested.response);
      // console.log(objectRequested.status);
      console.log("test1");

      if (objectRequested.status === 200) {
        console.log("test2");
        resolve(objectRequested.response.message);
        console.log("test3");
      } else {
        console.log("test4");
        reject(objectRequested.response.message);
      }
      return objectRequested.response.message;
    };
  });
}

console.log(xmlHttpRequ("GET", "https://swapi.tech/api/people/"));

xmlHttpRequ()
  .then((result) => {
    console.log("test11", result);
  })
  .catch((error) => {
    console.log("test22", error);
  });
