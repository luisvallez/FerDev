import { useState } from "react"
import { Links } from "../common/Links"

type ContactSectionProps = { email: string }

export function ContactSection({ email }: ContactSectionProps) {
  const [message, setMessage] = useState("")

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setMessage("Correo copiado.")
    } catch {
      setMessage(`Copia manualmente: ${email}`)
    }
  }

  return (
    <section id="contact" className="wrap">
      <div className="contact">
        <h2>Hablemos</h2>
        <p>
          Si tienes una oportunidad, un proyecto o una idea, escríbeme. Respondo
          en dentro de las siguientes 24 horas.
        </p>
        <div className="cta">
          <a className="btn primary" href={`mailto:${email}`}>
            Escribir por correo
          </a>
          <button className="btn" type="button" onClick={copyEmail}>
            Copiar correo
          </button>
        </div>
        <Links
          links={[
            { label: "GitHub", href: "https://github.com/luisvallez" },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/fernandozamorano/",
            },
            { label: "CV en PDF", href: "./FernandoZamoranoPortfolio.pdf" },
          ]}
        />
        <p className="muted" role="status" style={{ margin: "1rem 0 0" }}>
          {message}
        </p>
      </div>
    </section>
  )
}
