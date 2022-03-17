import React from "react"

// LOGOS
import frontendLogos from "./logos/frontend-logos.png"
import pythonLogo from "./logos/python-logo.png"
import apiLogo from "./logos/api-logo.png"
import reactLogo from "./logos/react-logo.svg"
import djangoLogo from "./logos/django-logo.png"
import figmaLogo from "./logos/figma-logo.png"

export default function Cube(props) {
  const [checkedRadio, setCheckedRadio] = React.useState("Frontend")
  const [cube, setCube] = React.useState()
  const [currentClass, setCurrentClass] = React.useState()
  const [currentRadio, setCurrentRadio] = React.useState()

  React.useEffect(() => {
    setCube(document.querySelector(".cube"))
    let showClass = 'show-' + checkedRadio
    let showRadio = document.querySelector(`#${checkedRadio}`)
    if (cube) {
      currentRadio.style.textDecoration = "none"
      cube.classList.add(showClass)
      showRadio.classList.add("active-cube")
    }
    showRadio.style.textDecoration = "underline"
    setCurrentClass(showClass)
    setCurrentRadio(showRadio)
  }, [checkedRadio])

  function changeHandler(event) {
    setCheckedRadio(event.target.value)
    if (currentClass) {
      cube.classList.remove(currentClass)
      currentRadio.classList.remove("active-cube")
    }
  }

  return (
    <div id="home-content" className="main-content">
      <div className="scene">
        <div className="cube">
          <div className="cube__face cube__face--front"><img className="cube__img" src={frontendLogos} alt="Frontend logo"/></div>
          <div className="cube__face cube__face--back"><img className="cube__img" src={pythonLogo} alt="Python logo"/></div>
          <div className="cube__face cube__face--left"><img className="cube__img" src={reactLogo} alt="React logo"/></div>
          <div className="cube__face cube__face--top"><img className="cube__img" src={djangoLogo} alt="Django logo"/></div>
          <div className="cube__face cube__face--right"><img className="cube__img" src={apiLogo} alt="API logo"/></div>
          <div className="cube__face cube__face--bottom"><img src={figmaLogo} alt="Figma logo"/></div>
        </div>
      </div>
      <p onChange={changeHandler} className="radio-group" >
        <label id="Frontend" className="radio__label">
          <input type="radio" name="rotate-cube-side" value="Frontend" /> Frontend
        </label>
        <label id="API" className="radio__label">
          <input type="radio" name="rotate-cube-side" value="API" /> API
        </label>
        <label id="Python" className="radio__label">
          <input type="radio" name="rotate-cube-side" value="Python" /> Python
        </label><br/>
        <label id="React" className="radio__label">
          <input type="radio" name="rotate-cube-side" value="React" /> React
        </label>
        <label id="Django" className="radio__label">
          <input type="radio" name="rotate-cube-side" value="Django" /> Django
        </label>
        <label id="Figma" className="radio__label">
          <input type="radio" name="rotate-cube-side" value="Figma" /> Figma
        </label>
      </p>
      <h2 className="cube__h2">> {checkedRadio}</h2>
    </div>
  )
}
