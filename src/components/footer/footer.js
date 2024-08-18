import * as React from "react"
import "./footer.scss"

const socialData = [
  {
    "title": "email",
    "url": "mailto:hello@moivedi.com"
  },
  {
    "title": "github",
    "url": "https://github.com/moivedi"
  },
  {
    "title": "linkedin",
    "url": "https://www.linkedin.com/in/moivedi"
  },
  {
    "title": "stackoverflow",
    "url": "https://stackoverflow.com/users/26460901/moivedi"
  },
]
const Footer = () => (
  <footer className="footer">
    <div className="footer__copyright">
      <div className="bottom credits">
        <small>
          Designed by
          <a href="https://github.com/bchiang7/bchiang7.github.io" rel="noreferrer" target="_blank"> Brittany Chiang</a>
        </small>
      </div>
    </div>
    <div className="footer__links">
      {
        socialData.map((social) => (
          <a href={social.url} target="_blank" rel="noreferrer" title="{{link.title}}">
            <span className="text">{social.title}</span>
          </a>
        ))
      }
    </div>
  </footer>
)

export default Footer
