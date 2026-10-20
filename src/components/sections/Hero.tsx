import { getCv } from "../../lib/cv"

export function Hero() {
  const cv = getCv()

  return (
    <section className="hero wrap">
      <p className="status">
        <span className="dot" aria-hidden="true" />
        <span>Abierto a oportunidades: remotas / full-time / freelance</span>
      </p>
      <h1>
        <span>Construyo web apps</span>
        <span>rápido, limpio</span>
        <span>y útil.</span>
      </h1>
      <p className="lede">
        Desarrollador enfocado en desarrollo web, automatización y herramientas
        de alto rendimiento.
      </p>
      <div className="cta">
        <a className="btn" href="#projects">
          Ver proyectos
        </a>
        <a
          className="btn primary"
          href={cv.href}
          download={cv.downloadName}
        >
          {cv.buttonLabel}
        </a>
        <a className="btn" href="#contact">
          Contactar
        </a>
      </div>
    </section>
  )
}
