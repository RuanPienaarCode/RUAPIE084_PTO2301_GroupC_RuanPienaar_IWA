const currentYear = new Date().getFullYear();

const holidays = {
  0: {
    id: 0,
    name: "Day of Reconciliation",
    date: new Date(`16 December ${currentYear}`),
  },
  1: {
    id: 1,
    name: "Workers Day",
    date: new Date(`1 April ${currentYear}`),
  },
  2: {
    id: 2,
    name: "Day of Goodwill",
    date: new Date(`26 December ${currentYear}`),
  },
  3: {
    id: 3,
    name: "New Year's Day",
    date: new Date(`1 January ${currentYear}`),
  },
  4: {
    id: 4,
    name: "Women's Day",
    date: new Date(`9 August ${currentYear}`),
  },
  5: {
    id: 5,
    name: "Heritage Day",
    date: new Date(`24 September ${currentYear}`),
  },
  6: {
    id: 6,
    name: "Christmas Day",
    date: new Date(`25 December ${currentYear} 13:25`),
  },
  7: {
    id: 7,
    name: "Youth Day",
    date: new Date(`16 June ${currentYear}`),
  },
  8: {
    id: 8,
    name: "Human Rights Day",
    date: new Date(`21 March ${currentYear}`),
  },
};

const christmas = 6;
const futureId = 9;

// Do not change code above this comment

console.log(
  holidays[futureId]
    ? holidays[futureId].name
    : `ID ${futureId} not created yet`
);

const copied = { ...holidays[christmas] };

copied.name = "X-mas Day";
copied.date.setHours(0);
copied.date.setMinutes(0);

const isEarlier = copied.date.getTime() < holidays[christmas].date.getTime();
console.log("New date is earlier:", isEarlier);

if (isEarlier) {
  holidays[christmas] = copied;
}

console.log("ID change:", holidays[christmas].id !== copied.id);
console.log("Name change:", holidays[christmas].name !== copied.name);
console.log("Date change:", holidays[christmas].date !== copied.date);

const holidayDates = Object.values(holidays).map((holiday) =>
  holiday.date.getTime()
);

const firstHolidayTimestamp = Math.min(...holidayDates);
const lastHolidayTimestamp = Math.max(...holidayDates);

const firstHoliday = new Date(firstHolidayTimestamp);
const lastHoliday = new Date(lastHolidayTimestamp);
const randomIndex = Math.floor(Math.random() * Object.keys(holidays).length);
const randomHoliday = holidays[randomIndex];

const formatDate = (date) => {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();
  return `${day}/${month}/${year}`;
};

const firstDay = firstHoliday.getDate();
const firstMonth = firstHoliday.getMonth();
const lastDay = lastHoliday.getDate();
const lastMonth = lastHoliday.getMonth();

console.log(`${firstDay}/${firstMonth + 1}/${currentYear}`);
console.log(`${lastDay}/${lastMonth + 1}/${currentYear}`);

console.log(randomHoliday.date);
