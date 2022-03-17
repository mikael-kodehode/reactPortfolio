import Cube from "../Cube"
import Nav from "../Nav"
import codewarsLogo from "../logos/codewars-logo.png"


export default function Home() {
  return (
    <div id="home-content" className="main-content">
      <Nav />
      <Cube />
      <div>
      </div>
      <div className="codewars">
        <h4>Hei! mitt navn er Mikael Ødegaard, fullstack utvikler. Du kan finne litt snacks under.</h4>
        <a href="https://www.codewars.com/users/hjuloppheng" target="_blank"><img className="codewars__logo" src={codewarsLogo} alt="Codewars-logo"/></a>
      </div>
    </div>
  )
}
