import { company } from "../Challange 2/nwabisa.js";
import { year } from "../Challange 2/nwabisa.js";

const message = "© " + company + " " + String(year);
document.querySelector("footer").innerText = message;

console.log(company);
console.log(year);
