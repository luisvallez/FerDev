import { useState } from "react"

type Theme = "dark" | "light"

const getInitialTheme = (): Theme =>
  document.documentElement.dataset.theme === "light" ? "light" : "dark"

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "light" ? "dark" : "light"
    setTheme(nextTheme)
    document.documentElement.dataset.theme = nextTheme

    try {
      localStorage.setItem("tema", nextTheme)
    } catch {
      // La preferencia visual funciona aunque el almacenamiento no esté disponible.
    }
  }

  return { theme, toggleTheme }
}
