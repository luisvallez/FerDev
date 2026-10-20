import type { AboutFact } from "../../types/portfolio"

type AboutFactsProps = {
  facts: readonly AboutFact[]
}

export function AboutFacts({ facts }: AboutFactsProps) {
  return (
    <dl className="facts">
      {facts.map((fact) => (
        <div key={fact.label}>
          <dt>{fact.label}</dt>
          <dd data-fill={fact.placeholder ? "" : undefined}>{fact.value}</dd>
        </div>
      ))}
    </dl>
  )
}
