function projDomManipulation() {
  const mainContainer = document.querySelector(".maincontainer");
  const projectWindowContainer = document.createElement("div");
  projectWindowContainer.classList.add("project-window-container");

  let projLabel = document.createElement("div");
  projLabel.classList.add("proj-label");
  projLabel.textContent = "Project Name";

  let inputProjName = document.createElement("input");
  inputProjName.classList.add("project-name");

  projectWindowContainer.appendChild(projLabel);
  projectWindowContainer.appendChild(inputProjName);

  projLabel = document.createElement("div");
  projLabel.textContent = "Project Description";

  let inputProjDescription = document.createElement("input");
  inputProjDescription.classList.add("project-description");

  projectWindowContainer.appendChild(projLabel);
  projectWindowContainer.appendChild(inputProjDescription);

  const newProjButtonContainer = document.createElement("div");
  newProjButtonContainer.classList.add("project-button-container");

  const addProjectBtn = document.createElement("button");
  addProjectBtn.classList.add("add");
  addProjectBtn.textContent = "Add Project";
  const cancelProjectBtn = document.createElement("button");
  cancelProjectBtn.textContent = "Cancel";
  cancelProjectBtn.classList.add("cancel");

  newProjButtonContainer.appendChild(addProjectBtn);
  newProjButtonContainer.appendChild(cancelProjectBtn);

  projectWindowContainer.appendChild(newProjButtonContainer);

  mainContainer.appendChild(projectWindowContainer);
}

function projectPanelDOM(projects, projName, id) {
  const projDiv = document.createElement("div");
  projDiv.classList.add("project");
  projDiv.id = id;
  projDiv.innerHTML = projName;
  projects.appendChild(projDiv);
}

function addProjectToDOM() {
  return;
}

export { projDomManipulation };
export { projectPanelDOM };
export { addProjectToDOM };
