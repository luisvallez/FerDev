type ChipsProps = {
  items: readonly string[]
}

export function Chips({ items }: ChipsProps) {
  return (
    <ul className="chips">
      {items.map((item, index) => (
        <li key={`${item}-${index}`}>{item}</li>
      ))}
    </ul>
  )
}
