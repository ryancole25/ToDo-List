import { addProjectToDOM } from "./domManipulation.js";
import { newItemDOM } from "./domManipulation.js";

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
  newItemDOM();
}

export { projectSelector };
export { addButtonListener };
