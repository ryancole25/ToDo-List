import { projDomManipulation } from "./domManipulation.js";
import { projectPanelDOM } from "./domManipulation.js";

function createNewProject() {
  // Opens up a window to add a new project
  projDomManipulation();
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

function appendProject(projList) {
  const projects = document.querySelector(".projects");
  clearAllProjects(projects);
  addProjectsToPanel(projects, projList);
}

function clearAllProjects(projects) {
  while (projects.childNodes.length > 2) {
    projects.removeChild(projects.lastChild);
  }
}

function addProjectsToPanel(projects, projList) {
  for (let i = 0; i < projList.length; i++) {
    projectPanelDOM(projects, projList[i].projName);
  }
}

export { createNewProject };
export { checkValidProject };
export { appendProject };
