// const value = "3";
// console.log(value + 4 + value);

const value = "3";
console.log(+value + 4 + +value);
console.log(Number(value) + 4 + Number(value));
console.log(parseInt(value) + 4 + +value);

//The reason why the code didnt run was because value was a string and was joining aka concatenation the 2 strings with the number 4 and logged 343.
