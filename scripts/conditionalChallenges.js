const outterObject = {
  firstObject: { id: 1, name: "Karely" },
  secObject: { address: "123 fake st", Phone: "555-555-5555" },
};

console.log(outterObject.firstObject);
console.log(outterObject["secObject"]);
console.log(outterObject["firstObject"], outterObject.secObject);

sentence = "I am a sentence";

const firstCapitalLet = (sentence) => {
  const splitStr = sentence.split(" ");

  splitStr.forEach((val, idx) => {
    console.log(val[0].toUpperCase() + val.slice(1));
  });
};

firstCapitalLet(sentence);
