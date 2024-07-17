const myInput = document.querySelector(".input");
const myHeader = document.querySelector(".header");
const myButton = document.getElementById("button");

myInput.addEventListener("change", (e) => {
  myHeader.textContent = e.target.value;
});

myButton.addEventListener("click", (e) => {
  myHeader.remove("myHeader");
});
console.log("I DID IT!! (:");
