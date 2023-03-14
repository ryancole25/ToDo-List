import { addProjectToDOM } from "./domManipulation.js";
import { newItemDOM } from "./domManipulation.js";
import { addButtonDOM } from "./domManipulation.js";

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

function addButtonListener() {
  const addItemButton = document.querySelector(".add-circle");
  addItemButton.addEventListener("click", () => {
    newItem();
  });
}

addProjectToDOM();

function newItem() {
  newItemDOM();
}

export { projectSelector };
export { addButtonListener };
