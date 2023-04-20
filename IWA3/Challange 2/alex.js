// alex.js
const firstname = "Alex";
const surname = "Naidoo";
export const role = "Head of Marketing";

export const display = firstname + " " + surname + " (" + role + ")";
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#alex").innerText = display;
});
