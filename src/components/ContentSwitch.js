import Experience from "./pages/cv-tabs/Experience"
import Education from "./pages/cv-tabs/Education"
import Courses from "./pages/cv-tabs/Courses"

export default function ContentSwitch(props) {
  switch (props.content) {
    case ("exp__li"):
      return <Experience />
    case ("edu__li"):
      return <Education />
    case ("misc__li"):
      return <Courses />
  }

}
