import type { ExternalLink } from "../../types/portfolio"

type LinksProps = {
  links: readonly ExternalLink[]
}

export function Links({ links }: LinksProps) {
  return (
    <div className="links">
      {links.map((link) => (
        <a key={link.label} href={link.href} target="_blank">
          {link.label}
        </a>
      ))}
    </div>
  )
}
