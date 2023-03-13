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
  removeActiveProjects();
  const projDiv = document.createElement("div");
  projDiv.classList.add("project");
  projDiv.classList.add("active");
  projDiv.id = id;
  projDiv.innerHTML = projName;
  projects.appendChild(projDiv);
}

function addProjectToDOM() {
  return;
}

function removeActiveProjects() {
  const projects = document.querySelectorAll(".project");
  for (let i = 0; i < projects.length; i++) {
    projects[i].className = "project";
  }
}

function newItemDOM() {
  const toDoItems = document.querySelector(".todo-items");
  const newItemContainer = document.createElement("div");
  newItemContainer.classList.add("item");

  const taskInput = document.createElement("input");
  taskInput.classList.add("task-input");
  taskInput.type = "text";
  taskInput.setAttribute("placeholder", "Default Task");
  newItemContainer.appendChild(taskInput);

  const dateInput = document.createElement("input");
  dateInput.classList.add("date-input");
  dateInput.type = "date";
  newItemContainer.appendChild(dateInput);

  const timeInput = document.createElement("input");
  timeInput.classList.add("time-input");
  timeInput.type = "time";
  newItemContainer.appendChild(timeInput);

  const addButton = document.createElement("button");
  addButton.classList.add("add-button");
  addButton.textContent = "Add";
  newItemContainer.appendChild(addButton);

  const cancelButton = document.createElement("button");
  cancelButton.classList.add("cancel-button");
  cancelButton.textContent = "Cancel";
  newItemContainer.appendChild(cancelButton);

  addButton;

  toDoItems.appendChild(newItemContainer);
}

export { projDomManipulation };
export { projectPanelDOM };
export { addProjectToDOM };
export { newItemDOM };
