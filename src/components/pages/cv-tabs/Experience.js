import React from "react"
export default function Experience() {
  const [content, setContent] = React.useState("epinion")
  const [currentContent, setCurrentContent] = React.useState()

  React.useEffect(() => {
    if (currentContent) {
      document.querySelector(`#${currentContent}__nav`).classList.remove("active")
      document.querySelector(`#${currentContent}`).classList.add("hidden")
      document.querySelector(`#${content}__nav`).classList.add("active")
    }
    document.querySelector(`#${content}`).classList.remove("hidden")
    setCurrentContent(content)
  }, [content])
  return (
    <div>
      <div className="paragraph main-article" id="experience">
        <div className="experience-nav">
          <ul className="p__nav__ul">
            <li onClick={() => setContent("epinion")}  className="p__nav__list active" id="epinion__nav">Epinion</li>
            <li onClick={() => setContent("bunnpris")} className="p__nav__list" id="bunnpris__nav">Bunnpris</li>
            <li onClick={() => setContent("norstat")}  className="p__nav__list" id="norstat__nav">Norstat</li>
            <li onClick={() => setContent("unicall")}  className="p__nav__list" id="unicall__nav">UniCall</li>
            <li onClick={() => setContent("teleConnect")}  className="p__nav__list" id="teleConnect__nav">Tele Connect</li>
          </ul>
        </div>
        <div>
          <div className="hidden" id="epinion">
            <p>
            Mar '18 - Apr '20 <br/><br/>
            Epinion Norge AS avd. Stavanger <br/>
            Administrasjonsmedarbeider - Telefonintervjuer
            </p>
            <ul>
              <li>Datainnsamling og intervjuarbeid</li>

              <li>Markedsundersøkelser i henhold til Norsk Markedsanalyseforenings retningslinjer</li>
              <li>Administrativt arbeid for å avlaste skiftledere</li>
              <li>Besvare kundehenvendelser via telefon og e-post</li>

            </ul>
          </div>
          <div className="hidden" id="bunnpris">
            <p>
            Des '17 - Feb '19 <br/><br/>
            Bunnpris Bragetunet <br/>
            Butikkmedarbeider
            </p>
            <ul>
              <li>Kundebehandling</li>
              <li>Kassearbeid</li>
              <li>Forefallende butikkarbeid</li>
              <li>Markedsføring</li>
              <li>PostNord MyPack pakkeutlevering</li>
            </ul>
          </div>
          <div className="hidden" id="norstat">
            <p>
            Feb '13 - Mai '15 <br/><br/>
            Norstat Lillehammer AS <br/>
            Intervjuer
            </p>
            <ul>
              <li>Intervju ansikt til ansikt</li>
              <li>Telefonintervju</li>
              <li>Rekruteringer av personer til fokusgrupper</li>
            </ul>
          </div>
          <div className="hidden" id="unicall">
            <p>
            Aug '12 - Jan '13 <br/><br/>
            UniCall Lillehammer AS <br/>
            Telefonselger
            </p>
            <ul>
              <li>Kundebehandling</li>
              <li>Oppsøkende salg</li>
            </ul>
          </div>
          <div className="hidden" id="teleConnect">
            <p>
            Jan '12 - Mai '12 <br/><br/>
            Tele Connect Gjøvik AS <br/>
            Telefonselger
            </p>
            <ul>
              <li>Kundebehandling</li>
              <li>Oppsøkende salg</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
