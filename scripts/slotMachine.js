/*
You design your own unique:
- rules for the game
- values for each combination
- how many reels are used to make combinations
- choose your own symbols

Your game must include the following:
- a promise
- async function that awaits a promise

- a betting system
  - a starting balance
    - Should be a variable starting at 0 
- a continue playing option
  - an input asking if the player would like to continue
- scoring system
  - if they have 3 emoji in a row they get 100 plus what they betted
  - if they get 2 of the same emojis 50 plus what they betted
  - if they didn't get any of them they loose the whole bet setting them back at a 0 balance
  
*/

console.log("Welcome to the Emoji Slot Machine! ");
const initialAddBalance = parseInt(prompt("How much money are we bettin? "));
const emojiArray = ["😍", "💋", "🔥", "😜", "🍒", "🌹", "💯", "😎", "💥"];

let userBalance = 0;

function spinner() {
  const ranEmoji1 = randomEmoji(emojiArray);
  const ranEmoji2 = randomEmoji(emojiArray);
  const ranEmoji3 = randomEmoji(emojiArray);

  if (ranEmoji1 === ranEmoji2 && ranEmoji1 === ranEmoji3) {
    console.log(`${ranEmoji1}${ranEmoji2}${ranEmoji3}`);
    return 100;
  } else if (ranEmoji1 === ranEmoji2 && ranEmoji1 !== ranEmoji3) {
    console.log(`${ranEmoji1}${ranEmoji2}${ranEmoji3}`);
    return 50;
  } else if (ranEmoji1 !== ranEmoji2 && ranEmoji1 !== ranEmoji3) {
    console.log(`${ranEmoji1}${ranEmoji2}${ranEmoji3}`);
    return 0;
  }
}

function gamblersBalance() {
  userBalance += initialAddBalance;
  const theSpinner = spinner();
  if (theSpinner === 0) {
    userBalance = 0;
    console.log(`Better luck next time! New balance: ${userBalance}`);
    prompt("End Game? (Enter y or n) ");
  } else if (theSpinner === 50) {
    userBalance += 50;
    console.log(`Ah! Almost had a yahtzee! New balance: ${userBalance} `);
    prompt("End Game? (Enter y or n) ");
  } else if (theSpinner === 100) {
    userBalance += 100;
    console.log(`You have some Luck there!  New balance: ${userBalance} `);
    prompt("End Game? (Enter y or n) ");
  }
  return userBalance;
}

console.log(gamblersBalance(initialAddBalance));

function randomEmoji() {
  const randomIndex = Math.floor(Math.random() * emojiArray.length);
  return emojiArray[randomIndex];
}

console.log(spinner(emojiArray));

const myPromise = () => {
  return new Promise((resolve) => {
    let allowed = true;
    if (allowed === true) {
      const setIntervalId = setInterval(() => {
        console.clear();
        console.log(spinner(emojiArray));
      }, 130);

      setTimeout(() => {
        clearInterval(setIntervalId);
      }, 5000);
    }
  });
};
console.log(myPromise());
