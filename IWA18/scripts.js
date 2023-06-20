import * as data from "./data.js";
import * as view from "./view.js";

const { html } = view; // Destructure the html object from the view module
/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event
 */
const handleDragOver = (event) => {
  event.preventDefault();
  const path = event.path || event.composedPath();
  let column = null;

  for (const element of path) {
    const { area } = element.dataset;
    if (area) {
      column = area;
      break;
    }
  }

  if (!column) return;
  updateDragging({ over: column });
  updateDraggingHtml({ over: column });
};

const handleDragStart = (event) => {
  console.log("handleDragStart");
};
const handleDragEnd = (event) => {
  console.log("handleDragEnd");
};

const handleAddToggle = (event) => {
  console.log("handleAddToggle");
  html.add.title.value = "";
  html.add.table.selectedIndex = 0;

  const addOverlay = document.querySelector("[data-add-overlay]");
  if (addOverlay) {
    if (addOverlay.open) {
      addOverlay.close();
    } else {
      addOverlay.showModal();
    }
  } else {
    console.error("Add Order overlay not found");
  }
};

const handleAddSubmit = (event) => {
  event.preventDefault();

  const orderText = html.add.title.value;
  const tableNumber = html.add.table.value;

  if (orderText && tableNumber) {
    // Add the order to the data
    const order = {
      text: orderText,
      table: tableNumber,
      status: "Ordered",
      created: new Date(),
    };

    // Update the UI with the new order
    const orderElement = view.createOrderHtml(order);
    const column = html.other.grid.querySelector(
      `[data-column="${tableNumber}"]`
    ); // Find the column element

    if (column) {
      column.appendChild(orderElement);
      updateOrderCount();
      handleAddToggle(); // Close the overlay

      // Add event listener to the new order for editing
      orderElement.addEventListener("click", handleEditToggle);
    } else {
      console.log(`Column "${tableNumber}" not found.`);
    }
  } else {
    alert("Please enter a title and select a table.");
    console.log("No order added");
  }
};

const handleEditToggle = (event) => {
  console.log("handleEditToggle");
};
const handleEditSubmit = (event) => {
  console.log("handleEditSubmit");
};
const handleDelete = (event) => {
  console.log("handleDelete");
};

const handleHelpToggle = () => {
  const helpOverlay = document.querySelector("[data-help-overlay]");
  if (helpOverlay) {
    if (helpOverlay.open) {
      helpOverlay.close();
    } else {
      helpOverlay.showModal();
    }
  } else {
    console.error("Help overlay not found");
  }
};

// Add event listener for the help button
const helpButton = document.querySelector(".help");
if (helpButton) {
  helpButton.addEventListener("click", handleHelpToggle);
} else {
  console.error("Help button not found");
}

html.add.cancel.addEventListener("click", handleAddToggle);
const addButton = document.querySelector("[data-add]");
if (addButton) {
  addButton.addEventListener("click", handleAddToggle);
} else {
  console.error("Add button not found");
}

html.add.cancel.addEventListener("click", handleAddToggle);
html.other.add.addEventListener("click", handleAddToggle);
html.add.form.addEventListener("submit", handleAddSubmit);

html.other.grid.addEventListener("click", handleEditToggle);
html.edit.cancel.addEventListener("click", handleEditToggle);
html.edit.form.addEventListener("submit", handleEditSubmit);
html.edit.delete.addEventListener("click", handleDelete);

html.help.cancel.addEventListener("click", handleHelpToggle);
html.help.overlay.addEventListener("close", () => {
  html.other.add.focus();
});

html.other.help.addEventListener("click", handleHelpToggle);

for (const htmlColumn of Object.values(html.columns)) {
  htmlColumn.addEventListener("dragstart", handleDragStart);
  htmlColumn.addEventListener("dragend", handleDragEnd);
}

for (const htmlArea of Object.values(html.area)) {
  htmlArea.addEventListener("dragover", handleDragOver);
}

html.other.add.focus();
