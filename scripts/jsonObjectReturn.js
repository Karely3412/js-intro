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
