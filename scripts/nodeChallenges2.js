const promtOne = prompt("Enter context: ");
const promtTwo = prompt("Enter size header: ");

function dynamicHeader(promtOne, promtTwo) {
  const newHeader = document.createElement(promtTwo);
  newHeader.innerText = promtOne;
  document.querySelector(".index-container").appendChild(newHeader);
}

console.log(dynamicHeader(promtOne, promtTwo));
