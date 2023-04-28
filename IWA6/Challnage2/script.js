const rent = 400;
const tax = "8%";
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

if (
  hourOfDay === 0 &&
  minuteOfDay === 0 &&
  hourOfDay !== undefined &&
  minuteOfDay !== undefined
) {
  var taxAsDecimal = parseInt(tax.slice(0, -1)) / 100;
  var startingAfterTax = salary * (1 - taxAsDecimal);
  var balance = startingAfterTax - (transport + food + rent);
}

console.log("R" + balance.toFixed(2));
