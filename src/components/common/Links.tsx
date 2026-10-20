import type { ExternalLink } from "../../types/portfolio"

type LinksProps = {
  links: readonly ExternalLink[]
}

export function Links({ links }: LinksProps) {
  return (
    <div className="links">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.download ? undefined : "_blank"}
          download={link.download}
        >
          {link.label}
        </a>
      ))}
    </div>
  )
}
