import * as React from "react"


const backgroundData = {
  title: "Background",
  part1: "Currently, I am working as Software Developer at ",
  part2: "VoiceQube",
  part2Href: "https://www.voiceqube.com/",
  part3: " where I am developing multiple products for different clients.",
  line2: "As a full-stack software engineer, I seamlessly connect backend and frontend teams, building strong architectures. I continuously stay updated on industry trends and eagerly pursue opportunities to learn and adopt emerging technologies.",
  line3Part1: "When I'm not writing code",
  line3Part2: ", you’ll often find me enjoying a game of badminton, crafting, or diving into impromptu DIY projects. ",
};
const Background = () => (
  <section className="section background">
    <div className="section__title">{backgroundData.title}</div>
    <div className="section__content">
      <p>
        {backgroundData.part1}
        <a className="underline-link" href={backgroundData.part2Href} target="_blank" rel="noreferrer">{backgroundData.part2}</a>
        {backgroundData.part3}
      </p>
      <p>
        {backgroundData.line2}
      </p>
      <p>
        <strong>{backgroundData.line3Part1}</strong>{backgroundData.line3Part2}
      </p>
    </div>
  </section>
)

export default Background
