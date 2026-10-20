import type { TimelineItem } from "../../types/portfolio"

export function TimelineSection({ items }: { items: readonly TimelineItem[] }) {
  return (
    <section id="path" className="wrap">
      <h2>Experiencia y formación</h2>
      <ol className="timeline">
        {items.map((item) => (
          <li key={`${item.period}-${item.title}`}>
            <span className="when">{item.period}</span>
            <strong>{item.title}</strong>
            <p className="muted">{item.description}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
