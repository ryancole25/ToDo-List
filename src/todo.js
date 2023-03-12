import { addProjectToDOM } from "./domManipulation.js";

function projectSelector(title, description) {
  const projTitle = document.querySelector(".project-title");
  const projDescription = document.querySelector(".proj-description");
  projTitle.textContent = title;
  projDescription.textContent = description;
}

addProjectToDOM();

export { projectSelector };
