import React from "react"
import Nav from "../Nav"
import Project from "../Project"

export default function Projects() {
  const rate = document.querySelector("#rate")
  const heartEl = document.querySelector("#heart-element")

  return (
    <div id="projects-content" class="main-content">
      <Nav />
      <p onChange="" className="radio-group" >
        <label id="projects_Frontend" className="radio__label">
          <input type="radio" name="projects" value="Frontend" /> Frontend
        </label>
        <label id="projects_API" className="radio__label">
          <input type="radio" name="projects" value="API" /> API
        </label>
        <label id="projects_Python" className="radio__label">
          <input type="radio" name="projects" value="Python" /> Python
        </label><br/>
        <label id="projects_React" className="radio__label">
          <input type="radio" name="projects" value="React" /> React
        </label>
        <label id="projects_Django" className="radio__label">
          <input type="radio" name="projects" value="Django" /> Django
        </label>
        <label id="projects_Figma" className="radio__label">
          <input type="radio" name="projects" value="Figma" /> Figma
        </label>
      </p>
      <Project />
    </div>
  )
}
