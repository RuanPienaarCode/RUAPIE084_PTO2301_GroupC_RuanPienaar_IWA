// nwabisa.js
const firstname = "Nwabisa";
const surname = "Gabe";
export const role = "CEO";

export const nwabisa = firstname + " " + surname + " (" + role + ")";
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#nwabisa").innerText = nwabisa;
});
