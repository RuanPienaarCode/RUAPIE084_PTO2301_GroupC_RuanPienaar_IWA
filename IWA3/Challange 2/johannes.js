// johannes.js
const firstname = "Johannes";
const surname = "Potgieter";
export const role = "Intern";

export const display = firstname + " " + surname + " (" + role + ")";
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#johannes").innerText = display;
});
