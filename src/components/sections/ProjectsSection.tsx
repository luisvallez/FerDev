import type { Project } from "../../types/portfolio"
import { Chips } from "../common/Chips"
import { ImagePlaceholder } from "../common/ImagePlaceholder"
import { Links } from "../common/Links"
import { ProjectHighlight } from "../projects/ProjectHighlight"

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card">
      {project.image && (
        <ImagePlaceholder
          src={project.image}
          alt={project.imageAlt ?? project.name}
          wide
        />
      )}
      <div className="meta">
        <h3>{project.name}</h3>
        <span className="year">{project.year}</span>
      </div>
      <p>{project.description}</p>
      <ProjectHighlight content={project.highlight} />
      <Chips items={project.technologies} />
      <Links links={project.links} />
    </article>
  )
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <article className="card feature">
      <div>
        <div className="meta">
          <h3>{project.name}</h3>
          <span className="year">{project.year}</span>
        </div>
        <p>{project.description}</p>
        <dl className="case">
          {project.caseStudy?.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.text}</dd>
            </div>
          ))}
        </dl>
        <Chips items={project.technologies} />
        <Links links={project.links} />
      </div>
      {project.image && (
        <ImagePlaceholder
          src={project.image}
          alt={project.imageAlt ?? project.name}
        />
      )}
    </article>
  )
}

export function ProjectsSection({
  projects,
}: {
  projects: readonly Project[]
}) {
  const [featuredProject, ...otherProjects] = projects

  return (
    <section id="projects" className="wrap">
      <h2>Proyectos seleccionados</h2>
      <FeaturedProject project={featuredProject} />
      <div className="grid">
        {otherProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}
