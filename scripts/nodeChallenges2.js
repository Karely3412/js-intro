function dynamicHeader(headerText, headerSize) {
  const newHeader = document.createElement(headerSize);
  newHeader.innerText = headerText;
  document.body.appendChild(newHeader);
}

console.log(dynamicHeader("I am a header", 1));
