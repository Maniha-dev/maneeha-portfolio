import ProjectCard from "../components/ProjectCard";
import { projects, contactEmail } from "../data/projects";

export default function Projects() {
  return (
    <>
      <section className="section">
        <div className="page">
          <h1>What I've Built</h1>
          <p>
            A growing collection of real-world applications where I apply
            frontend, backend, APIs, databases, and deployment concepts
            while continuing to grow as a software engineer.
          </p>
        </div>
      </section>

      <section className="section" style={{ borderBottom: "none" }}>
        <div className="page">
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <a className="plain btn-primary" href={`mailto:${contactEmail}`}>
            Contact Me
          </a>
        </div>
      </section>
    </>
  );
}
