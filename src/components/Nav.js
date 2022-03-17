import { NavLink } from "react-router-dom"

export default function Nav() {
  return (
    <nav>
      <ul className="nav__ul">
        <li className="nav__list">
          <NavLink to="/" id="home" className={({ isActive }) => isActive ? "active nav__link": "nav__link"}>Hjem</NavLink>
        </li>
        <li className="nav__list">
          <NavLink to="/projects" id="projects" className={({ isActive }) => isActive ? "active nav__link" : "nav__link"}>Prosjekter</NavLink>
        </li>
        <li className="nav__list">
          <NavLink to="/cv" id="cv" className={({ isActive }) => isActive ? "active nav__link" : "nav__link"}>CV</NavLink>
        </li>
        <li className="nav__list">
          <NavLink to="/about" id="om" className={({ isActive }) => isActive ? "active nav__link" : "nav__link"}>Om</NavLink>
        </li>
      </ul>
    </nav>
  )
}
