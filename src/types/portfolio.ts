export type ExternalLink = {
  label: string
  href: string
  placeholder?: boolean
}

export type CaseStudyItem = {
  label: string
  text: string
}

export type Project = {
  name: string
  year: string
  description: string
  highlight?: string
  image?: string
  imageAlt?: string
  technologies: string[]
  links: ExternalLink[]
  caseStudy?: CaseStudyItem[]
}

export type StackGroup = {
  title: string
  items: string[]
}

export type TimelineItem = {
  period: string
  title: string
  description: string
}

export type AboutFact = {
  label: string
  value: string
  placeholder?: boolean
}
