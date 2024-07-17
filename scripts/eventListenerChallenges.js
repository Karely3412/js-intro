const myInput = document.querySelector(".input");
const myHeader = document.querySelector(".header");

myInput.addEventListener("change", (e) => {
  console.log("test3");
  myHeader.textContent = e.target.value;
  console.log("test4");
});
console.log("I DID IT!! (:");
