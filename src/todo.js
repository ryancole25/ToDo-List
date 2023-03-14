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

function projectSelector(title, description) {
  const projTitle = document.querySelector(".project-title");
  const projDescription = document.querySelector(".proj-description");
  projTitle.textContent = title;
  projDescription.textContent = description;

  const toDoItems = document.querySelector(".todo-items");
  while (toDoItems.firstChild) {
    toDoItems.removeChild(toDoItems.lastChild);
  }
  addButtonDOM(toDoItems);
  newItemDOM();
}

function addButtonListener(projList) {
  const addItemButton = document.querySelector(".add-circle");
  addToDoItemButton(projList);
  addItemButton.addEventListener("click", () => {
    newItem();
    addToDoItemButton(projList);
  });
}

addProjectToDOM();

function newItem() {
  newItemDOM();
}

function addToDoItemButton(projList) {
  const addBtn = document.querySelector(".add-button");
  console.log(addBtn);
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

function checkValidToDo() {
  const taskInput = document.querySelector(".task-input");
  console.log(taskInput.value);
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
