import "./style.css";
import { createNewProject } from "./project.js";
import { checkValidProject } from "./project.js";
import { appendProject } from "./project.js";
import { checkForPopup } from "./project.js";
import { addProjectListeners } from "./project.js";

import { projectSelector } from "./todo.js";
import { addButtonListener } from "./todo.js";
import { newItemDOM } from "./domManipulation";
import { addToDoItemButton } from "./todo.js";

function Project(projName, projDescription, id) {
  this.projName = projName;
  this.projDescription = projDescription;
  this.id = id;
  this.toDoItems = [];
}

// Handle making new projects
const newProject = document.querySelector("#create-proj");
const projList = [];
newProject.addEventListener("click", () => {
  if (!checkForPopup()) {
    createNewProject();
  }
  const projectWindowContainer = document.querySelector(
    ".project-window-container"
  );
  const addButton = projectWindowContainer.querySelector(".add");
  const cancelButton = projectWindowContainer.querySelector(".cancel");

  addButton.addEventListener("click", () => {
    if (checkValidProject()) {
      const projName = document.querySelector(".project-name");
      const projDescription = document.querySelector(".project-description");
      let newProj = new Project(
        projName.value,
        projDescription.value,
        projList.length
      );
      projList.push(newProj);
      projectWindowContainer.remove();
      projectSelector(projName.value, projDescription.value);
      appendProject(projList);
      addProjectListeners(projList);
      addButtonListener(projList);
    }
  });
  cancelButton.addEventListener("click", () => projectWindowContainer.remove());
});

const addContent = document.querySelector(".add-circle");
addContent.addEventListener("click", () => {
  newItemDOM();
});

const homeButton = document.querySelector(".option");
homeButton.addEventListener("click", () => {
  projectSelector("Home", "");
  addButtonListener();
});
