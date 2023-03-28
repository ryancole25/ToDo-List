// TODO
// Make the home screen have all of the todo items from each project
// Add ability to sort the todo items
// Add edit button
// Add delete button
// Add local storage
// Clean up the todo items (learn how to use date/time module)

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

import { allToDoItemsToDOM } from "./domManipulation";
import { homeSelector } from "./todo.js";

function Project(projName, projDescription, id) {
  this.projName = projName;
  this.projDescription = projDescription;
  this.id = id;
  this.toDoItems = [];
}

const allToDo = [];

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
      projectSelector(
        projName.value,
        projDescription.value,
        projList[projList.length - 1].toDoItems
      );
      // Add project to the side panel
      appendProject(projList);
      // Add listeners to the side panel projects
      addProjectListeners(projList);
    }
  });
  cancelButton.addEventListener("click", () => projectWindowContainer.remove());
});

const addContent = document.querySelector(".add-circle");
addContent.addEventListener("click", () => {
  newItemDOM();
});

const homeToDo = [];
const homeButton = document.querySelector(".option");
homeButton.addEventListener("click", () => {
  homeSelector("Home", "", homeToDo, projList);
  // // For each project, add the toDo items to the page
  // for (let i = 0; i < projList.length; i++) {
  //   allToDoItemsToDOM(projList[i].toDoItems);
  // }
});

// // Select the home project as the default
homeSelector("Home", "", homeToDo, projList);
