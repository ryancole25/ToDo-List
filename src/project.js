import { projDomManipulation } from "./domManipulation.js";

function Project(projName, projDescription) {
  this.projName = projName;
  this.description = projDescription;
}

function createNewProject() {
  // Opens up a window to add a new project
  projDomManipulation();
  const projectWindowContainer = document.querySelector(
    ".project-window-container"
  );
  const addButton = projectWindowContainer.querySelector(".add");

  addButton.addEventListener("click", () => {
    console.log("add");
    if (checkValidProject()) {
      const projName = document.querySelector(".project-name");
      const projDescription = document.querySelector(".project-description");
      let newProj = new Project(projName.value, projDescription.value);
      return;
    }
  });

  if (newProj) {
    return newProj;
  }
}

function checkValidProject() {
  const projName = document.querySelector(".project-name");
  if (projName.value == "") {
    console.log("Please enter a project name");
    return false;
  } else {
    return true;
  }
}

export { createNewProject };
