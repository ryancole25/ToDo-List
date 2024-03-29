import { addProjectToDOM } from "./domManipulation.js";
import { newItemDOM } from "./domManipulation.js";
import { addButtonDOM } from "./domManipulation.js";
import { addToDoItemsToDOM } from "./domManipulation.js";
import { removeNewItemDOM } from "./domManipulation.js";
import { format } from "date-fns";
import { allToDoItemsToDOM } from "./domManipulation";

function ToDoItem(name, date, time, checked) {
  this.name = name;
  this.date = date;
  this.time = time;
  this.checked = checked;
}

// Allows you to select a project from the dashboard
function projectSelector(title, description, toDoList) {
  const projTitle = document.querySelector(".project-title");
  const projDescription = document.querySelector(".proj-description");
  projTitle.textContent = title;
  projDescription.textContent = description;

  const toDoItems = document.querySelector(".todo-items");
  while (toDoItems.firstChild) {
    toDoItems.removeChild(toDoItems.lastChild);
  }
  // Adds the (+) button to the page
  addButtonDOM(toDoItems);

  // Add listener to the (+) button
  addButtonListener(toDoList);

  if (toDoList.length == 0) {
    newItemDOM();
    addToDoItemButton(toDoList);
    cancelToDoItemButton();
  } else {
    addToDoItemsToDOM(toDoList);
  }
}

// Allows you to select a project from the dashboard
function homeSelector(title, description, homeList, projList) {
  const projTitle = document.querySelector(".project-title");
  const projDescription = document.querySelector(".proj-description");
  projTitle.textContent = title;
  projDescription.textContent = description;

  const toDoItems = document.querySelector(".todo-items");
  while (toDoItems.firstChild) {
    toDoItems.removeChild(toDoItems.lastChild);
  }
  // Adds the (+) button to the page
  addButtonDOM(toDoItems);

  // Add listener to the (+) button
  homeAddButtonListener(homeList, projList);

  if (homeList.length == 0 && projList.length == 0) {
    newItemDOM();
    homeAddToDoItemButton(homeList, projList);
    cancelToDoItemButton();
  } else {
    addToDoItemsToDOM(homeList);
  }
  // For each project, add the toDo items to the page
  for (let i = 0; i < projList.length; i++) {
    allToDoItemsToDOM(projList[i].toDoItems);
  }
}

// Adds listener to (+) button
function addButtonListener(toDoList) {
  const addItemButton = document.querySelector(".add-circle");
  addItemButton.addEventListener("click", () => {
    newItem();
    addToDoItemButton(toDoList);
    cancelToDoItemButton();
  });
}

// Adds listener to (+) button
function homeAddButtonListener(toDoList, projList) {
  const addItemButton = document.querySelector(".add-circle");
  addItemButton.addEventListener("click", () => {
    homeNewItem(projList);
    homeAddToDoItemButton(toDoList, projList);
    cancelToDoItemButton();
  });
}

// Add a new item to the page if there isn't a new item
function newItem() {
  const items = document.querySelectorAll(".item");
  if (!items[0]) {
    newItemDOM();
  } else if (items[items.length - 1].className != "item not-complete") {
    newItemDOM();
  }
}

// Add a new item to the page if there isn't a new item
function homeNewItem(projList) {
  const items = document.querySelectorAll(".item");
  if (!items[0] && projList.length != 0) {
    newItemDOM();
  } else if (items[items.length - 1].className != "item not-complete") {
    newItemDOM();
  }
}

// Creates a listener for the add button for a new to do item
function addToDoItemButton(toDoList) {
  const addBtn = document.querySelector(".add-button");
  addBtn.addEventListener("click", () => {
    if (checkValidToDo()) {
      const taskInput = document.querySelector(".task-input");
      const dateInput = document.querySelector(".date-input");
      const timeInput = document.querySelector(".time-input");
      const projects = document.querySelectorAll(".project");

      let date = "";
      if (dateInput.value != "") {
        let month = dateInput.value.slice(5, 7);
        let day = dateInput.value.slice(8, 10);
        let year = dateInput.value.slice(0, 4);
        day = parseInt(day) + 1;
        if (day < 10) {
          day = `0${day}`;
        }
        date = format(new Date(`${year}-${month}-${day}`), "MMMM dd, yyyy");
      }
      toDoList.push(
        new ToDoItem(taskInput.value, date, timeInput.value, false)
      );
      addToDoItemsToDOM(toDoList);
    }
  });
}

// Creates a listener for the add button for a new to do item
function homeAddToDoItemButton(homeList, projList) {
  const addBtn = document.querySelector(".add-button");
  addBtn.addEventListener("click", () => {
    if (checkValidToDo()) {
      const taskInput = document.querySelector(".task-input");
      const dateInput = document.querySelector(".date-input");
      const timeInput = document.querySelector(".time-input");
      const projects = document.querySelectorAll(".project");

      let date = "";
      if (dateInput.value != "") {
        let month = dateInput.value.slice(5, 7);
        let day = dateInput.value.slice(8, 10);
        let year = dateInput.value.slice(0, 4);
        day = parseInt(day) + 1;
        if (day < 10) {
          day = `0${day}`;
        }
        date = format(new Date(`${year}-${month}-${day}`), "MMMM dd, yyyy");
      }
      homeList.push(
        new ToDoItem(taskInput.value, date, timeInput.value, false)
      );
      addToDoItemsToDOM(homeList);

      // For each project, add the toDo items to the page
      for (let i = 0; i < projList.length; i++) {
        allToDoItemsToDOM(projList[i].toDoItems);
      }
    }
  });
}

function cancelToDoItemButton() {
  const cancelBtn = document.querySelector(".cancel-button");
  cancelBtn.addEventListener("click", () => {
    removeNewItemDOM();
  });
}

// Validates that there is at least a task name for the todo item
function checkValidToDo() {
  const taskInput = document.querySelector(".task-input");
  // Checks regular expression to make sure there isn't just whitespace
  if (taskInput.value.match(/^\s*$/)) {
    taskInput.value = "";
    taskInput.style.backgroundColor = "#FFDCD1";
    taskInput.setAttribute("placeholder", "Required Field");
    return false;
  } else {
    return true;
  }
}

export { projectSelector };
export { addButtonListener };
export { homeSelector };
