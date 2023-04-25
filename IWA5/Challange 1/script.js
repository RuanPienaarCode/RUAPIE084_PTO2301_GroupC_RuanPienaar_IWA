//Set Values at the top
const FREE_WARNING = "Free shipping only applies to single customer orders";
const BANNED_WARNIN =
  "Unfortunately we do not ship to your country of residence";
const NONE_SELECTED = "0";
//Customer Data
//-----------------------------------
let customers = 1;
let location = "RSA";
let shipping = 0;
let currency = "$";
//-----------------------------------
//Items in the Cart
let shoes = 300 * 1;
let toys = 100 * 5;
let shirts = 150 * NONE_SELECTED;
let batteries = 35 * 2;
let pens = 5 * NONE_SELECTED;
//Check Location and set shipping and currency
let total = shoes + batteries + pens + shirts + toys;
// Dollar vs Rand is Rand Amount * 18,32
if (location === "NAM" || location === "RSA") {
  if (location === "NAM") {
    shipping = 600; // $600 for NAM
    currency = "$";
  } else {
    shipping = 400; //R400 for RSA
    currency = "R";
  }
} else {
  shipping = 800; // $800 for else where
}
//if users from North Korea they should receive a notice
if (location === "NK") {
  console.log(BANNED_WARNIN);
}

//If cart cost is more or equal than R1000 or $60 and based in South Africa or Namibia there shipping is free
if (total >= 1000) {
  if (location === "NAM" || location === "RSA") {
    if (customers !== 1) {
      shipping = 0;
    }
  }
}

//if the number of customers is exactly 1, else it should show the message stored WARNING.
if (shipping === 0 && customers !== 1) {
  console.log(FREE_WARNING);
}

total = total + shipping;

console.log("Price", currency, total);
