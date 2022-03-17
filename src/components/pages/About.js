import React from "react"
import Nav from "../Nav"

export default function About() {
  const [paragraph, setParagraph] = React.useState("p1")
  const [currentParagraph, setCurrentParagraph] = React.useState(null)
  const [currentParagraphTitle, setCurrentParagraphTitle] = React.useState(document.querySelector(null))
  React.useEffect(() => {
    const p = document.querySelector(`#${paragraph}`)
    if (currentParagraph) {
      currentParagraph.classList.add("hidden")
      document.querySelector(`#${currentParagraph.getAttribute("id")}__title`).classList.remove("active")
    }
    setCurrentParagraph(p)
    p.classList.remove("hidden")
    document.querySelector(`#${paragraph}__title`).classList.add("active")
  }, [paragraph])
  return (
  <div className="main-content" id="about-content">
    <Nav />
    <article className="main-article paragraph">
      <ul className="p__nav__ul">
        <li onClick={() => setParagraph("p1")} className="p__nav__list active" id="p1__title">I</li>
        <li onClick={() => setParagraph("p2")} className="p__nav__list" id="p2__title">II</li>
        <li onClick={() => setParagraph("p3")} className="p__nav__list" id="p3__title">III</li>
      </ul>
      <p className="hidden" id="p1">Jeg heter Mikael Ødegaard. Etter mer enn 2500 arbeidstimer med service og kundekontakt har jeg blitt erfaren i profesjonell kommunikasjon og blitt opptatt av å tilfredsstille folks behov. <br/> <br/>På grunn av min generasjon har jeg hatt en kjærlighet for data siden jeg var 5 år gammel. Spillene var simplere, men mer imponerende. <br/><br/>Gjennom hele barndommen hjalp min far meg med å lage ting i Excel. Tabeller og planer etc. Så da jeg fikk min første laptop som 13 år begynte jeg selv med å lage modeller og tabeller i Excel.</p>

      <p className="hidden" id="p2">Jeg har engasjert meg for koding siden 2016, men begynte for alvor 2021 som følge av at jeg fikk være med på et kurs. (Takk til Jobloop).. <br/><br/>I 2016 startet jeg med HTML og CSS, men i løpet av kurset økte interessen gradvis mot Python og Javascript. Jeg har mange prosjekter som jeg jobber med på fritiden så jeg kan vel kalle koding en hobby.</p>

      <p className="hidden" id="p3">Personlig er jeg veldig interessert i sport, spiller sjakk hver dag og driver med tallpuzzles som sudoku, hitori, nonogram og kakuro, og eventuelt sjakk puzzles på kvelden for å koble av fra prosjektene.</p>
    </article>
  </div>
  )
}
