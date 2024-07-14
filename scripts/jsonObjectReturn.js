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

johnnyBravo = new User(2, "Johnny Bravo", "test@tester.com", "4321");
mickeyMouse = new User(3, "Mickey Mouse", "test@testing.com", "2134");

console.log(`Hello ${johnnyBravo.name}your email is ${johnnyBravo.email}`);
console.log(johnnyBravo);
console.log(mickeyMouse);

// Challenge 2
// - - - - - - - - - -
