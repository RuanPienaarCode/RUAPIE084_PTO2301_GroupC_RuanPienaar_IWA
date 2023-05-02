// The following code should log a message that says Good morning with a dynamically entered name (from two possible variables).
// Either a nickname and/or firstname can be added as variables in the code. If a nickname is present it should be displayed instead of the firstname, if there is no nickname then the firstname should be shown. Unfortunately, currently, the following gets logged: Good morning, ${nickname} || {firstname}!.
// Please change the expression, in the console log, to behave correctly, and explain why it did not behave as expected. Furthermore, please add a state that when neither a firstname nor nickname is present only Good morning! should be logged.

// const nickname = "Timmy";
// const firstname = "Timothy";

// console.log("Good Morning, " ${nickname} || {firstname} + "!");

const nickname = "Timmy";
const firstname = "Timothy";

if (nickname && firstname) {
  console.log(`Good Morning, ${nickname}!`);
} else if (nickname) {
  console.log(`Good Morning, ${nickname}!`);
} else if (firstname) {
  console.log(`Good Morning, ${nickname}!`);
} else if (firstname) {
  console.log(`Good Morning!`);
}
