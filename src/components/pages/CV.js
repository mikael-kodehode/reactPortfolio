import React from "react"

import Nav from "../Nav"
import CvIntro from "../CvIntro"
import Experience from "./cv-tabs/Experience"
import Education from "./cv-tabs/Education"
import Courses from "./cv-tabs/Courses"
import ContentSwitch from "../ContentSwitch"

export default function Cv() {
  const [content, setContent] = React.useState("exp__li")
  const [currentContent, setCurrentContent] = React.useState()

  React.useEffect(() => {
    if (currentContent) {
      document.querySelector(`#${currentContent}`).classList.remove("active")
      document.querySelector(`#${content}`).classList.add("active")
    }
    setCurrentContent(content)
  }, [content])

  return (
    <div id="cv-content" className="main-content">
      <Nav />
      <CvIntro />
      <ul id="cv__nav__ul">
        <li onClick={() => setContent("exp__li")} id="exp__li" className="cv__nav__li active">Erfaring</li>
        <li onClick={() => setContent("edu__li")} id="edu__li" className="cv__nav__li">Utdannelse</li>
        <li onClick={() => setContent("misc__li")} id="misc__li" className="cv__nav__li">Kurs/Verv</li>
      </ul>
      <ContentSwitch content={content}/>
    </div>
  )
}
