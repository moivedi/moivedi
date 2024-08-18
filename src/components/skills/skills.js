import * as React from "react"
import "./skills.scss"

const skillsData = {
  "languagesTitle": "Languages",
  "languages": ["Javascript", "HTML", "CSS"],
  "frameworksTitle": "Libraries and Framework",
  "frameworks": ["React.Js", "Node.Js", "Express", "Material UI", "Redux", "Mongoose"],
  "toolsTitle": "Tools",
  "tools": ["Git", "GitHub", "VSCode", "Postman"],
  "designTitle": "Database",
  "design": ["MongoDB"],
}

const Skills = () => (
  <section className="section skills">
    <div className="section__title">Skills</div>
    <div className="section__content">
      <div className="skillz">
        <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.languagesTitle}</div>
          <ul>
            {skillsData.languages.map((data) => <li className="skillz__category__item">{data}</li>)}
          </ul>
        </div>
        <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.frameworksTitle}</div>
          <ul>
            {skillsData.frameworks.map((data) => <li className="skillz__category__item">{data}</li>)}
          </ul>
        </div>
        <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.toolsTitle}</div>
          <ul>
            {skillsData.tools.map((data) => <li className="skillz__category__item">{data}</li>)}
          </ul>
        </div>
        <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.designTitle}</div>
          <ul>
            {skillsData.design.map((data) => <li className="skillz__category__item">{data}</li>)}
          </ul>
        </div>
      </div>
    </div>
  </section>
)

export default Skills
