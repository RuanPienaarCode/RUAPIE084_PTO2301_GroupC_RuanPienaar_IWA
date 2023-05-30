// The following code provides three values as variables, and creates a function called logTwice.
// The logTwice function should take a provided parameter and log it two times.
// The expected output is:

// Hello, John (35). I love coding!
// Hello, John (35). I love coding!

// Unfortunately at the moment went attempting to run the code the following error is returned:

// hobby is not a function

const firstName = "John";
const age = 35;
const hobby = "Coding";

const logTwice = (parameter) => {
  console.log(parameter);
  console.log(parameter);
};

function hobbyFunction() {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`);
}

hobbyFunction();
