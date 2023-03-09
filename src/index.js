import "./style.css";
import { createNewProject } from "./project.js";

const newProject = document.querySelector("#create-proj");
newProject.addEventListener("click", () => createNewProject());
