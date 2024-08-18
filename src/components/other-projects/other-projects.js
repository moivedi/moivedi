import * as React from "react"
import Parser from 'html-react-parser';
import "./other-projects.scss"

const otherProjectsData = [
  {
    "name": "Expense Management App",
    "url": "https://github.com/moivedi/expenseManagementApp",
    "description": "The Expense Management System is a responsive web app that streamlines expense tracking for individuals and organizations. It simplifies daily expense management, provides spending insights for better financial decisions, and facilitates easy management of expense categories. <br> <a class='small' href='https://github.com/moivedi/expenseManagementApp'>👨🏻‍💻Github Source Code👨🏻‍💻</a>",
    "used": [
      {"thing": "Node.js"},
      {"thing": "Express"},
      {"thing": "MongoDB"},
      {"thing": "ReactJS"}
    ]
  },
  {
    "name": "Product Catalogue System",
    "url": "https://github.com/moivedi/productCatalogueSystem",
    "description": "This helps business owners to manage various details about the inventory products like quantity, price, different approvals, etc. <br> <a class='small' href='https://github.com/moivedi/productCatalogueSystem'>👨🏻‍💻Github Source Code👨🏻‍💻</a>",
    "used": [
      {"thing": "Node.js"},
      {"thing": "Express"},
      {"thing": "MongoDB"}
    ]
  }
]

const FeaturedProjects = () => (
  <section className="section other-projects">
    <div className="section__title">Other Projects</div>
    <div className="section__content">
      {
        otherProjectsData.map((project) => (
          <div className="project">
            <div className="project__name">
              <a href={project.url} target="_blank" rel="noreferrer" className="arrow-link">{project.name}</a>
            </div>
            <p>{Parser(project.description)}</p>
            <div className="project__used">
              {
                project.used.map((item) => (
                  <span className="project__used__item">{item.thing}</span>
                ))
              }
            </div>
          </div>
        ))
      }
    </div>
  </section>
)

export default FeaturedProjects
