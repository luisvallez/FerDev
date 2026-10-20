type ProjectHighlightProps = {
  content?: string
}

export function ProjectHighlight({ content }: ProjectHighlightProps) {
  if (!content) {
    return null
  }

  return <p className="muted">{content}</p>
}
