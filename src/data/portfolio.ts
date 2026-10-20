import type {
  AboutFact,
  Project,
  StackGroup,
  TimelineItem,
} from "../types/portfolio"

export const portfolio = {
  owner: "Fernando Zamorano",
  email: "FerCoding@proton.me",
  projects: [
    {
      name: "Focus App",
      year: "2026",
      description:
        "Aplicación móvil de entrenamiento y seguimiento de actividad física, construida para ofrecer la máxima fluidez y rendimiento en dispositivos móviles.",
      image: "./FocusSS.png",
      imageAlt: "Pantalla principal de Focus App",
      technologies: ["React", "Vite", "Capacitor"],
      links: [
        // { label: "Código", href: "https://github.com/luisvallez/Focus" },
        // { label: "Demo en vivo", href: "#", placeholder: true },
        {
          label: "Descargar APK",
          href: "https://github.com/luisvallez/Focus",
          placeholder: true,
        },
      ],
      caseStudy: [
        {
          label: "Problema",
          text: "Hice esta aplicación porque era enfadoso tener que depender de otras aplicaciones para contar el tiempo, ya sea con un temporizador o cronómetro, y días después olvidar en qué día de mi rutina de ejercicio iba. Esta aplicación resuelve todo eso.",
        },
        {
          label: "Enfoque",
          text: "Elegí React, Vite y Capacitor porque era, para mí, la manera mas sencilla de pasar mi código a una aplicación de celular (Android), para no tener que recurrir a usar lenguajes como Kotlin o Java. De paso, utilicé mis conocimientos de optimización para que la aplicación fuera lo más fluida posible.",
        },
        {
          label: "Resultado",
          text: "Hice una aplicación optimizada que cubre por completo mis necesidades, manteniendo una estructura limpia y ordenada.",
        },
      ],
    },
    {
      name: "YT Video Downloader",
      year: "2026",
      description:
        "Herramienta de escritorio minimalista para la gestión y descarga de contenido multimedia, optimizada para un consumo mínimo de recursos.",
      highlight:
        "Esta aplicación fue hecha con Flet (python) para poder ver su potencial para la creación de aplicaciones de escritorio, sin Chronium, utilizando Flutter, de fondo.",
      image:
        "https://github.com/luisvallez/YTVideoDownloader/blob/main/pic.jpg?raw=true",
      imageAlt: "Interfaz de YT Video Downloader",
      technologies: ["Python", "Flet", "yt-dlp"],
      links: [
        {
          label: "Código",
          href: "https://github.com/luisvallez/YTVideoDownloader",
        },
      ],
    },
    {
      name: "ImagenJS",
      year: "2023",
      description:
        "Herramienta web minimalista para comprimir el tamaño de una imagen.",
      highlight:
        "La compresión y redimensionamiento de las imágenes se realiza utilzando el navegador mismo, con la API de canvas de HTML, sin la necesidad de depender de librerías externas.",
      // 2:3
      image: "ImagenJS.png",
      imageAlt: "Interfaz de ImagenJS",
      technologies: ["HTML", "CSS", "JavaScript"],
      links: [
        { label: "Código", href: "https://github.com/luisvallez/ImagenJS" },
        {
          label: "Demo en vivo",
          href: "https://luisvallez.github.io/ImagenJS/",
          placeholder: true,
        },
      ],
    },
  ] satisfies Project[],
  stacks: [
    {
      title: "Frontend",
      items: ["React", "TypeScript", "HTML", "CSS", "Vite"],
    },
    {
      title: "Móvil y escritorio",
      items: ["Capacitor", "Python", "Flet"],
    },
    // {
    //   title: "Backend y datos",
    //   items: ["[Tecnología]", "[Tecnología]"],
    // },
    {
      title: "Herramientas",
      items: ["Git", "GitHub", "Hoppscotch", "Postman"],
    },
  ] satisfies StackGroup[],
  timeline: [
    {
      period: "2023 – 2024",
      title: "Frontend Developer (remote) · S-FX.com Small Business Solutions",
      description:
        "Desarrollo y mantenimiento a páginas web dentro de WordPress, utilizando Bricks.",
    },
  ] satisfies TimelineItem[],
} as const

export const aboutFacts = [
  {
    label: "Ubicación",
    value: "Mexicali, México",
    // placeholder: true,
  },
  {
    label: "Idiomas",
    value: "Español, Inglés nivel medio/avanzado",
    // placeholder: true,
  },
  {
    label: "Disponibilidad",
    value: "Inmediata",
    // placeholder: true,
  },
  {
    label: "Fuera del código",
    value:
      "Me gusta adaptar modelos de IA para usos especificos, la ingeniería en audio y el diseño gráfico",
    // placeholder: true,
  },
] satisfies AboutFact[]
