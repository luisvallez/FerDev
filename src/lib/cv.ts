export type CvLanguage = "es" | "en"

type Cv = {
  language: CvLanguage
  href: string
  downloadName: string
  linkLabel: string
  buttonLabel: string
}

const cvs: Record<CvLanguage, Cv> = {
  es: {
    language: "es",
    href: "./CV_Español.pdf",
    downloadName: "CV_Fernando_Zamorano_ES.pdf",
    linkLabel: "CV en PDF (ES)",
    buttonLabel: "Descargar CV (ES)",
  },
  en: {
    language: "en",
    href: "./CV_English.pdf",
    downloadName: "CV_Fernando_Zamorano_EN.pdf",
    linkLabel: "CV en PDF (EN)",
    buttonLabel: "Descargar CV (EN)",
  },
}

/**
 * Devuelve el CV en español si el idioma principal del sistema operativo
 * o del navegador es español; en caso contrario (inglés u otro idioma),
 * devuelve el CV en inglés.
 */
export function getCv(languages?: readonly string[]): Cv {
  const preferredLanguages =
    languages ??
    (typeof navigator === "undefined"
      ? []
      : navigator.languages?.length
        ? navigator.languages
        : [navigator.language])

  const primaryLanguage = preferredLanguages[0] ?? ""

  return primaryLanguage.toLowerCase().startsWith("es") ? cvs.es : cvs.en
}
