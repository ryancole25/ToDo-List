// Brings up a window to make a new project
function projDomManipulation() {
  const mainContainer = document.querySelector(".maincontainer");
  const projectWindowContainer = document.createElement("div");
  projectWindowContainer.classList.add("project-window-container");

  let projLabel = document.createElement("div");
  projLabel.classList.add("proj-label");
  projLabel.textContent = "Project Name";

  let inputProjName = document.createElement("input");
  inputProjName.classList.add("project-name");

  projectWindowContainer.appendChild(projLabel);
  projectWindowContainer.appendChild(inputProjName);

  projLabel = document.createElement("div");
  projLabel.textContent = "Project Description";

  let inputProjDescription = document.createElement("input");
  inputProjDescription.classList.add("project-description");

  projectWindowContainer.appendChild(projLabel);
  projectWindowContainer.appendChild(inputProjDescription);

  const newProjButtonContainer = document.createElement("div");
  newProjButtonContainer.classList.add("project-button-container");

  const addProjectBtn = document.createElement("button");
  addProjectBtn.classList.add("add");
  addProjectBtn.textContent = "Add Project";
  const cancelProjectBtn = document.createElement("button");
  cancelProjectBtn.textContent = "Cancel";
  cancelProjectBtn.classList.add("cancel");

  newProjButtonContainer.appendChild(addProjectBtn);
  newProjButtonContainer.appendChild(cancelProjectBtn);

  projectWindowContainer.appendChild(newProjButtonContainer);

  mainContainer.appendChild(projectWindowContainer);
}

function projectPanelDOM(projects, projName, id) {
  removeActiveProjects();
  const projDiv = document.createElement("div");
  projDiv.classList.add("project");
  projDiv.classList.add("active");
  projDiv.id = id;
  projDiv.innerHTML = projName;
  projects.appendChild(projDiv);
}

function addProjectToDOM() {
  return;
}

function removeActiveProjects() {
  const projects = document.querySelectorAll(".project");
  for (let i = 0; i < projects.length; i++) {
    projects[i].className = "project";
  }
}

// Input for new to do item
function newItemDOM() {
  const toDoItems = document.querySelector(".todo-items");
  const newItemContainer = document.createElement("div");
  newItemContainer.className = "item not-complete";

  const taskInput = document.createElement("input");
  taskInput.classList.add("task-input");
  taskInput.type = "text";
  taskInput.setAttribute("placeholder", "Default Task");
  newItemContainer.appendChild(taskInput);

  const dateInput = document.createElement("input");
  dateInput.classList.add("date-input");
  dateInput.type = "date";
  newItemContainer.appendChild(dateInput);

  const timeInput = document.createElement("input");
  timeInput.classList.add("time-input");
  timeInput.type = "time";
  newItemContainer.appendChild(timeInput);

  const addButton = document.createElement("button");
  addButton.classList.add("add-button");
  addButton.textContent = "Add";
  newItemContainer.appendChild(addButton);

  const cancelButton = document.createElement("button");
  cancelButton.classList.add("cancel-button");
  cancelButton.textContent = "Cancel";
  newItemContainer.appendChild(cancelButton);

  toDoItems.appendChild(newItemContainer);
}

function addButtonDOM(toDoItems) {
  const addCircle = document.createElement("div");
  addCircle.classList.add("add-circle");
  addCircle.textContent = "+";
  toDoItems.appendChild(addCircle);
}

// Removes all to do items and adds new ones based on the updated todo list
function addToDoItemsToDOM(toDoList) {
  const items = document.querySelectorAll(".item");

  for (let i = 0; i < items.length; i++) {
    items[i].remove();
  }
  const toDoItems = document.querySelector(".todo-items");
  for (let j = 0; j < toDoList.length; j++) {
    toDoItems.appendChild(addItem(toDoList[j], toDoList));
  }
}

function allToDoItemsToDOM(toDoList) {
  const items = document.querySelectorAll(".item");
  const toDoItems = document.querySelector(".todo-items");
  for (let j = 0; j < toDoList.length; j++) {
    toDoItems.appendChild(addItem(toDoList[j]));
  }
}

// Creates a div for each item
function addItem(item, toDoList) {
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("item");

  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");
  taskDiv.textContent = item.name;
  const dateDiv = document.createElement("div");
  dateDiv.classList.add("date");
  dateDiv.textContent = item.date;
  const timeDiv = document.createElement("div");
  timeDiv.classList.add("time");
  timeDiv.textContent = item.time;

  const checkBox = document.createElement("div");
  checkBox.classList.add("checkbox");
  if (item.checked) {
    checkBox.className = "checkbox check";
    checkBox.innerHTML = `<img src="./images/checkmark.svg">`;
  }

  checkBox.addEventListener("click", () => {
    item.checked = toggleCheckBox(checkBox);
  });

  const editButton = document.createElement("img");
  editButton.classList.add("edit");
  editButton.src = `./images/edit.svg`;

  editButton.addEventListener("click", () => {
    console.log(item);
    // item.name = "Ryan";
    editToDoItem(item);
  });

  const closeButton = document.createElement("img");
  closeButton.classList.add("close");
  closeButton.src = `./images/close.svg`;

  itemDiv.appendChild(taskDiv);
  itemDiv.appendChild(dateDiv);
  itemDiv.appendChild(timeDiv);
  itemDiv.appendChild(checkBox);
  itemDiv.appendChild(editButton);
  itemDiv.appendChild(closeButton);

  return itemDiv;
}

function editToDoItem() {
  return;
}

// Toggles the checkbox as checked or not checked
function toggleCheckBox(checkBox) {
  if (checkBox.className == "checkbox") {
    checkBox.className = "checkbox check";
    checkBox.innerHTML = `<img src="./images/checkmark.svg">`;
    return true;
  } else {
    checkBox.className = "checkbox";
    checkBox.innerHTML = "";
    return false;
  }
}

function removeNewItemDOM() {
  const newItem = document.querySelector(".not-complete");
  newItem.remove();
}

export { projDomManipulation };
export { projectPanelDOM };
export { addProjectToDOM };
export { newItemDOM };
export { addButtonDOM };
export { addToDoItemsToDOM };
export { removeNewItemDOM };
export { allToDoItemsToDOM };
