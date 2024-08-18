import * as React from "react"
import "./featured-projects.scss"

const FeaturedProjects = () => (
  <section className="section featured-projects">
    <div className="section__title">Featured Projects</div>
    <div className="section__content">
      <div className="project blistabloc">
        <figure className="project__pic">
          <a href="https://meetdule.moivedi.com/" rel="noreferrer" target="_blank">
            <img src="./images/featured/meetdule/frame.png" alt=""/>
          </a>
        </figure>
        <figcaption className="project__caption">
          <div className="project__name">
            <a href="https://passkeynotes.com/" rel="noreferrer" target="_blank">Meetdule</a>
          </div>
          <p>A scheduling application that streamlines the process of finding and managing meeting times. It allows users to schedule and manage meetings effortlessly in one convenient location.</p>
        </figcaption>
      </div>
    </div>
  </section>
)

export default FeaturedProjects
