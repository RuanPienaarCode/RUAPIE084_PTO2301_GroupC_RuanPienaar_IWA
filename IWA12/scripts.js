// scripts.js

const STATUS_MAP = {
  shelf: {
    color: "green",
    canReserve: true,
    canCheckout: true,
    canCheckIn: false,
  },
  reserved: {
    color: "blue",
    canReserve: false,
    canCheckout: true,
    canCheckIn: false,
  },
  overdue: {
    color: "red",
    canReserve: false,
    canCheckout: false,
    canCheckIn: true,
  },
  checkedOut: {
    color: "orange",
    canReserve: false,
    canCheckout: false,
    canCheckIn: true,
  },
};

// Get the book elements
const book1 = document.getElementById("book1");
const book2 = document.getElementById("book2");
const book3 = document.getElementById("book3");

// Update the book status and button properties
updateBookStatus(book1);
updateBookStatus(book2);
updateBookStatus(book3);

function updateBookStatus(book) {
  const statusElement = book.querySelector(".status");
  const reserveButton = book.querySelector(".reserve");
  const checkoutButton = book.querySelector(".checkout");
  const checkinButton = book.querySelector(".checkin");

  const status = statusElement.textContent.trim();
  const bookStatus = STATUS_MAP[status];

  // Set the text color of the status element
  statusElement.style.color = bookStatus.color;

  // Enable/disable buttons based on the book status
  reserveButton.disabled = !bookStatus.canReserve;
  checkoutButton.disabled = !bookStatus.canCheckout;
  checkinButton.disabled = !bookStatus.canCheckIn;

  // Apply grayscale filter to buttons
  const grayscaleValue =
    bookStatus.canReserve && bookStatus.canCheckout && !bookStatus.canCheckIn
      ? "0%"
      : "100%";
  reserveButton.style.filter = `grayscale(${grayscaleValue})`;
  checkoutButton.style.filter = `grayscale(${grayscaleValue})`;
  checkinButton.style.filter = `grayscale(${grayscaleValue})`;

  // Set button colors to black for grayscale effect

  reserveButton.style.color = bookStatus.canReserve ? "black" : "grey";
  checkoutButton.style.color = bookStatus.canCheckout ? "black" : "grey";
  checkinButton.style.color = bookStatus.canCheckIn ? "black" : "grey";

  // Add event listeners to buttons
  reserveButton.addEventListener("click", reserveHandler);
  checkoutButton.addEventListener("click", checkoutHandler);
  checkinButton.addEventListener("click", checkinHandler);
}

// Button event handlers
function reserveHandler() {
  const book = this.closest("div");
  const statusElement = book.querySelector(".status");
  statusElement.textContent = "reserved";
  updateBookStatus(book);
}

function checkoutHandler() {
  const book = this.closest("div");
  const statusElement = book.querySelector(".status");
  statusElement.textContent = "checkedOut";
  updateBookStatus(book);
}

function checkinHandler() {
  const book = this.closest("div");
  const statusElement = book.querySelector(".status");
  statusElement.textContent = "shelf";
  updateBookStatus(book);
}
