import React from 'react'
import Weather from '../assets/weather.png'

function Projects() {
  return (
    <section className="projects-section" id="projects">

      <h2 className="text-center">Some of My <span className="accent">P</span>rojects</h2>

      <div className="projects">

        <div
  className="project-card"
  style={{backgroundImage: `url(${Weather})`}}
>
    <a target="_blank" href="https://city-weather-app-0vi7.onrender.com/">
          <div className="project-overlay">
            <h3>Weather application</h3>
            <p>Full stack application built with React</p>
            

          </div>
          </a>
        </div>

        <div className="project-card">
          <div className="project-overlay">
            <h3>Project 2</h3>
            <p>REST API with Java Spring Boot and PostgreSQL.</p>
          </div>
        </div>

        <div className="project-card">
          <div className="project-overlay">
            <h3>Project 3</h3>
            <p>Interactive web app using React and Bootstrap.</p>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Projects