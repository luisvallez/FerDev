import type { StackGroup as StackGroupData } from "../../types/portfolio"
import { Chips } from "../common/Chips"

function StackGroup({ title, items }: StackGroupData) {
  return (
    <div>
      <h3>{title}</h3>
      <Chips items={items} />
    </div>
  )
}

export function StackSection({
  groups,
}: {
  groups: readonly StackGroupData[]
}) {
  return (
    <section id="stack" className="wrap">
      <h2>Stack y herramientas</h2>
      <div className="stack">
        {groups.map((group) => (
          <StackGroup key={group.title} {...group} />
        ))}
      </div>
    </section>
  )
}
