import { useState } from "react"
import { aboutFacts } from "../../data/portfolio"
import { AboutFacts } from "../about/AboutFacts"

function Avatar() {
  const [failed, setFailed] = useState(false)

  return failed ?
      <>FZ</>
    : <img
        src="Yo.png"
        alt="Retrato de Fernando Zamorano"
        onError={() => setFailed(true)}
      />
}

export function AboutSection() {
  return (
    <section id="about" className="wrap">
      <h2>Sobre mí</h2>
      <div className="about">
        <figure className="avatar">
          <Avatar />
        </figure>
        <div>
          <p>
            Soy Fernando Zamorano, desarrollador web. Inicié mi carrera como
            programador desde la preparatoria (2015 ) y hoy me enfoco en el
            desarrollo de aplicaciones y páginas web.
          </p>
          <p>
            Me motiva mucho optimizar procesos, automatizar tareas y crear
            herramientas/aplicaciones que utilizaré todos los días.
          </p>
          <p>
            Estoy buscando trabajo presencial, hibrido o en remoto, enfocado al
            desarrollo de aplicaciones/páginas web, me interesa aportar mis
            conocimientos, a la par con un equipo, y que se me permita aprender
            y mejorar en el transcurso.
          </p>
          <AboutFacts facts={aboutFacts} />
        </div>
      </div>
    </section>
  )
}
