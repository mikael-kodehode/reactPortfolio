import { Routes } from "react-router"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { createBrowserHistory } from "history";

import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Cv from "./pages/CV"
import About from "./pages/About"

export default function Routers() {
  const history = createBrowserHistory()
  return (
    <div>
      <Router history={history}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/cv" element={<Cv/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Router>
    </div>
  )
}
