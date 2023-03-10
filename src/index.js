import "./style.css";
import { createNewProject } from "./project.js";
import { checkValidProject } from "./project.js";
import { appendProject } from "./project.js";

function Project(projName, projDescription) {
  this.projName = projName;
  this.description = projDescription;
}

// Handle making new projects
const newProject = document.querySelector("#create-proj");
const projList = [];
newProject.addEventListener("click", () => {
  createNewProject();
  const projectWindowContainer = document.querySelector(
    ".project-window-container"
  );
  const addButton = projectWindowContainer.querySelector(".add");
  const cancelButton = projectWindowContainer.querySelector(".cancel");

  addButton.addEventListener("click", () => {
    console.log("add");
    if (checkValidProject()) {
      const projName = document.querySelector(".project-name");
      const projDescription = document.querySelector(".project-description");
      let newProj = new Project(projName.value, projDescription.value);
      projList.push(newProj);
      projectWindowContainer.remove();
      appendProject(projList);
    }
  });
  cancelButton.addEventListener("click", () => projectWindowContainer.remove());
});
