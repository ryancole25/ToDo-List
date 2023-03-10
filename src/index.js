import "./style.css";
import { createNewProject } from "./project.js";

const newProject = document.querySelector("#create-proj");
const projList = [];
newProject.addEventListener("click", () => {
  projList.push(createNewProject());
});
