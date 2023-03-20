import { projDomManipulation } from "./domManipulation.js";
import { projectPanelDOM } from "./domManipulation.js";
import { addButtonListener, projectSelector } from "./todo.js";

// Will only allow for a new project menu if the current one is closed
function checkForPopup() {
  const projectWindowContainer = document.querySelector(
    ".project-window-container"
  );
  if (projectWindowContainer == null) {
    return false;
  } else {
    return true;
  }
}

function createNewProject() {
  // Opens up a window to add a new project
  projDomManipulation();
}

function checkValidProject() {
  const projName = document.querySelector(".project-name");
  if (projName.value == "") {
    projName.style.backgroundColor = "#FFDCD1";
    projName.setAttribute("placeholder", "Please enter a project name");
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

// Adds listeners for the projects on the side panel and toggles the current project as active
function addProjectListeners(projList) {
  const projects = document.querySelectorAll(".project");
  projects.forEach((project) =>
    project.addEventListener("click", () => {
      for (let i = 0; i < projects.length; i++) {
        if (i == projList[project.id].id) {
          projects[i].className = "project active";
        } else {
          projects[i].className = "project";
        }
      }
      projectSelector(
        projList[project.id].projName,
        projList[project.id].projDescription,
        projList[project.id].toDoItems
      );
    })
  );
}

function clearAllProjects(projects) {
  while (projects.childNodes.length > 2) {
    projects.removeChild(projects.lastChild);
  }
}

function addProjectsToPanel(projects, projList) {
  for (let i = 0; i < projList.length; i++) {
    projectPanelDOM(projects, projList[i].projName, projList[i].id);
  }
}

export { createNewProject };
export { checkValidProject };
export { appendProject };
export { checkForPopup };
export { addProjectListeners };
