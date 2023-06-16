import * as data from "./data.js";
import * as view from "./view.js";

const { html } = view; // Destructure the html object from the view module

const handleDragOver = (event) => {
  event.preventDefault();
  const path = event.path || (event.composedPath && event.composedPath());
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
  const orderId = event.target.dataset.orderId;
  event.dataTransfer.setData("text/plain", orderId);
};

const handleDragEnd = (event) => {
  clearDragging();
  updateDraggingHtml({ over: null });
};

const handleAddToggle = () => {
  html.addOverlay.classList.toggle("hidden");
  if (!html.addOverlay.classList.contains("hidden")) {
    // Clear the input fields when the overlay is opened
    html.add.form.reset();
  }
};

const handleAddSubmit = (event) => {
  event.preventDefault();

  const form = event.target;
  const titleInput = form.elements.title;
  const tableInput = form.elements.table;

  const title = titleInput.value.trim();
  const table = tableInput.value;

  if (!title || !table) {
    alert("Please fill in all fields");
    return;
  }

  const order = data.createOrderData({ title, table });
  data.addOrder(order);
  view.renderOrder(order);
  titleInput.value = "";
  tableInput.selectedIndex = 0;

  html.addOverlay.classList.add("hidden");
};

const handleEditToggle = (event) => {
  const orderId = event.target.dataset.orderId;
  const order = data.getOrder(orderId);

  if (!order) {
    console.error("Order not found");
    return;
  }

  view.populateEditForm(order);
  html.editOverlay.classList.toggle("hidden");
};

const handleEditSubmit = (event) => {
  event.preventDefault();

  const form = event.target;
  const idInput = form.elements.id;
  const titleInput = form.elements.title;
  const tableInput = form.elements.table;
  const columnInput = form.elements.column;

  const id = idInput.value;
  const title = titleInput.value.trim();
  const table = tableInput.value;
  const column = columnInput.value;

  if (!id || !title || !table || !column) {
    alert("Please fill in all fields");
    return;
  }

  const order = data.getOrder(id);

  if (!order) {
    console.error("Order not found");
    return;
  }

  order.title = title;
  order.table = table;
  order.column = column;

  data.updateOrder(order);
  view.updateOrderHtml(order);

  html.editOverlay.classList.add("hidden");
};

const handleDelete = (event) => {
  const orderId = event.target.dataset.orderId;

  if (!confirm("Are you sure you want to delete this order?")) {
    return;
  }

  data.deleteOrder(orderId);
  view.removeOrder(orderId);
  html.editOverlay.classList.add("hidden");
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
// html.other.add.addEventListener("click", handleAddToggle);
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
html.other.help.addEventListener("click", handleHelpToggle);

for (const htmlColumn of Object.values(html.columns)) {
  htmlColumn.addEventListener("dragstart", handleDragStart);
  htmlColumn.addEventListener("dragend", handleDragEnd);
}

for (const htmlArea of Object.values(html.areas)) {
  htmlArea.addEventListener("dragover", handleDragOver);
}
