// The following code is meant to output as a single value (only a single console.log) but split into three different lines.
// It should be as follows:

// Leo Musvaire (Owed: R 9394.00)
// Sarah Kleinhans (Owed: R 4582.20)

// ----------------------------------
//   Total amount owed: R 14 976.20
// ----------------------------------

// It is recommended that you Google and read up on the following:

// The difference between parseInt and parseFloat
// The .toFixed() method

const leoName = "Leo";
const leoSurname = "Musvaire     ";
const leoBalance = "-9394";

const sarahName = "Sarah    ";
const sarahSurname = "Kleinhans";
const sarahBalance = "-4582.21000111";

const divider = "----------------------------------";

// Only change below this line

const owed =
  "R" +
  (
    Math.abs(parseFloat(leoBalance)) + Math.abs(parseFloat(sarahBalance))
  ).toFixed(2);
const leo = `${leoName.trim()} ${leoSurname.trim()} (Owed: R${Math.abs(
  parseFloat(leoBalance)
).toFixed(2)})`;
const sarah = `${sarahName.trim()} ${sarahSurname.trim()} (Owed: R${Math.abs(
  parseFloat(sarahBalance)
).toFixed(2)})`;
const total = "Total amount owed: ";
const result = `\n\n${leo}\n${sarah}\n\n${divider}\n${total}${owed}\n${divider}\n\n`;

console.log(result);
