import { addProjectToDOM } from "./domManipulation.js";

function projectSelector(title, description) {
  const projTitle = document.querySelector(".project-title");
  const projDescription = document.querySelector(".proj-description");
  projTitle.textContent = title;
  projDescription.textContent = description;
}

function addButtonListener() {
  const addItemButton = document.querySelector(".add-circle");
  addItemButton.addEventListener("click", () => {
    console.log("here");
    newItem();
  });
}

addProjectToDOM();

function newItem() {
  const toDoItems = document.querySelector(".todo-items");
  const newItemContainer = document.createElement("div");
  newItemContainer.classList.add("item");
  toDoItems.appendChild(newItemContainer);
  console.log("ererwr");
}

export { projectSelector };
export { addButtonListener };
