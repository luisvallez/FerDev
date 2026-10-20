import { useTheme } from "../../hooks/useTheme"

export function Header() {
  const { toggleTheme } = useTheme()

  return (
    <header className="nav">
      <div className="wrap">
        <a className="brand" href="#top">Fernando Zamorano</a>
        <nav className="nav-links" aria-label="Navegación principal">
          <a href="#projects">Proyectos</a>
          <a href="#about">Sobre mí</a>
          <a href="#stack">Stack</a>
          <a href="#path">Trayectoria</a>
          <a href="#contact">Contacto</a>
        </nav>
        <button
          className="theme"
          type="button"
          aria-label="Cambiar entre tema claro y oscuro"
          onClick={toggleTheme}
        >
          ◐
        </button>
      </div>
    </header>
  )
}
