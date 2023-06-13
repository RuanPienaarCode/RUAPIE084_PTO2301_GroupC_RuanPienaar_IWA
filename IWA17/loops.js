// scripts.js

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Function to get the number of days in a given month
const getDaysInMonth = (date) =>
  new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

// Only edit below

// Function to create the calendar data
const createData = () => {
  const current = new Date();
  current.setDate(1); // Set the date to the first day of the current month

  const startDay = current.getDay(); // Get the day of the week for the first day of the month
  const daysInMonth = getDaysInMonth(current); // Get the total number of days in the current month

  const weeks = Math.ceil((startDay + daysInMonth) / 7); // Calculate the number of weeks required to display all days
  const result = [];

  let dayIndex = 1;
  for (let weekIndex = 0; weekIndex < weeks; weekIndex++) {
    const week = {
      week: weekIndex + 1,
      days: [],
    };

    for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
      const isValid = dayIndex <= daysInMonth; // Check if the day is valid within the current month

      week.days.push({
        dayOfWeek: dayOfWeek,
        value: isValid ? dayIndex : "", // Assign the day index if valid, otherwise leave it empty
      });

      dayIndex++;
    }

    result.push(week);
  }

  return result;
};

// Function to add a cell to the calendar HTML
const addCell = (existing, classString, value) => {
  const result = `
    ${existing}
    <td class="${classString}">
      &nbsp;${value}&nbsp;
    </td>
  `;

  return result;
};

// Function to generate the calendar HTML
const createHtml = (data) => {
  let result = "";

  for (const { week, days } of data) {
    let inner = "";
    inner = addCell(inner, "table__cell table__cell_sidebar", `Week ${week}`); // Display the week number in the sidebar cell

    for (const { dayOfWeek, value } of days) {
      const isToday = new Date().getDate() === value; // Check if the current day is today
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6; // Check if the day is a weekend
      let classString = "table__cell";

      if (isToday) classString += " table__cell_today"; // Apply special styling for the current day
      if (isWeekend) classString += " table__cell_weekend"; // Apply special styling for weekends

      inner = addCell(inner, classString, value); // Add the cell with appropriate class and value
    }

    result += `<tr>${inner}</tr>`; // Add the row with inner cells to the result
  }

  return result;
};

// Only edit above

// Event listener to generate the calendar on page load
window.addEventListener("DOMContentLoaded", () => {
  const current = new Date();
  document.querySelector("[data-title]").innerText = `${
    MONTHS[current.getMonth()]
  } ${current.getFullYear()}`; // Display the current month and year in the title

  const data = createData();
  document.querySelector("[data-content]").innerHTML = createHtml(data); // Generate and display the calendar HTML
});
