import { addProjectToDOM } from "./domManipulation.js";
import { newItemDOM } from "./domManipulation.js";
import { addButtonDOM } from "./domManipulation.js";
import { addToDoItemsToDOM } from "./domManipulation.js";

function ToDoItem(name, date, time, checked) {
  this.name = name;
  this.date = date;
  this.time = time;
  this.checked = checked;
}

// Allows you to select a project from the dashboard
function projectSelector(title, description, id, projList) {
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
  addButtonListener(projList, id);

  if (projList[id].toDoItems.length == 0) {
    newItemDOM();
    addToDoItemButton(projList);
  } else {
    addToDoItemsToDOM(projList[id].toDoItems);
  }
}

// Adds listener to (+) button
function addButtonListener(projList, id) {
  const addItemButton = document.querySelector(".add-circle");
  addItemButton.addEventListener("click", () => {
    newItem();
    addToDoItemButton(projList);
  });
}

// addProjectToDOM();

// Add a new item to the page if there isn't a new item
function newItem() {
  const items = document.querySelectorAll(".item");
  if (items[items.length - 1].className != "item not-complete") {
    newItemDOM();
  }
}

// Creates a listener for the add button for a new to do item
function addToDoItemButton(projList) {
  const addBtn = document.querySelector(".add-button");
  addBtn.addEventListener("click", () => {
    if (checkValidToDo()) {
      const taskInput = document.querySelector(".task-input");
      const dateInput = document.querySelector(".date-input");
      const timeInput = document.querySelector(".time-input");
      const projects = document.querySelectorAll(".project");
      for (let i = 0; i < projects.length; i++) {
        if (projects[i].className == "project active") {
          projList[i].toDoItems.push(
            new ToDoItem(taskInput.value, dateInput.value, timeInput.value)
          );
          addToDoItemsToDOM(projList[i].toDoItems);
        }
      }
    }
  });
}

// Validates that there is at least a task name for the todo item
function checkValidToDo() {
  const taskInput = document.querySelector(".task-input");
  if (taskInput.value == "") {
    taskInput.style.backgroundColor = "#FFDCD1";
    taskInput.setAttribute("placeholder", "Required Field");
    return false;
  } else {
    return true;
  }
}

export { projectSelector };
export { addButtonListener };
