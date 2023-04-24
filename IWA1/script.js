const MAX_NUMBER = 15;
const MIN_NUMBER = -5;
const STEP_AMOUNT = 5;

const a = 123;
const b = 321;
/*
console.log(a);
console.log(typeof b);
console.log(b.toString());
console.log(a + b);
 */

/*
 *Use alt Q - to compress comments.
 *Lorem Ipsum is simply dummy text of the printing and typesetting industry.
 *Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
 *when an unknown printer took a galley of type and scrambled it to make a type
 *specimen book. It has survived not only five centuries, but also the leap into
 *electronic typesetting, remaining essentially unchanged. It was popularised in
 *the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
 *and more recently with desktop publishing software like Aldus PageMaker
 *including versions of Lorem Ipsum.
 */
const number = document.querySelector('[data-key="number"]');
const add = document.querySelector('[data-key="add"]');
const subtract = document.querySelector('[data-key="subtract"]');

const subtractHandler = () => {
  const newValue = parseInt(number.value) - STEP_AMOUNT;
  number.value = newValue;

  if (add.disabled === true) {
    add.disabled = false;
  }
  if (newValue <= MIN_NUMBER) {
    subtract.disabled = true;
  }
};
const addHandler = () => {
  const newValue = parseInt(number.value) + STEP_AMOUNT;
  number.value = newValue;
  if (subtract.disabled === true) {
    subtract.disabled = false;
  }
  if (newValue >= MAX_NUMBER) {
    add.disabled = true;
  }
};

add.addEventListener("click", addHandler);
subtract.addEventListener("click", subtractHandler);
